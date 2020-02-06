/* globals window, document */
import React, { Component } from "react";
import PropTypes from "prop-types";
import {  BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from 'axios';
import set from "lodash/set";
import cloneDeep from "lodash/cloneDeep";
import store from "store2";
import { tryParseJSON } from "../../utils/helpers";

import TwoTrainings from "./TwoTrainings";
import Contact from "./Contact";
import ExtraAndSchedule from "./ExtraAndSchedule";

import './form.css'

const defaultState = {
  stage: 0,
  packageChoice: null,
  extra: {
    group: false,
    prive: false,
    prive5: false,
    prive1: false,
    duo: false,
  },
  schedule: JSON.parse('["2018-01-01T16:00:00.000Z","2018-01-01T17:00:00.000Z","2018-01-01T18:00:00.000Z","2018-01-01T19:00:00.000Z","2018-01-02T16:00:00.000Z","2018-01-02T17:00:00.000Z","2018-01-02T18:00:00.000Z","2018-01-02T19:00:00.000Z","2018-01-03T16:00:00.000Z","2018-01-03T17:00:00.000Z","2018-01-03T18:00:00.000Z","2018-01-03T19:00:00.000Z","2018-01-04T16:00:00.000Z","2018-01-04T17:00:00.000Z","2018-01-04T18:00:00.000Z","2018-01-04T19:00:00.000Z","2018-01-05T16:00:00.000Z","2018-01-05T17:00:00.000Z","2018-01-05T18:00:00.000Z","2018-01-05T19:00:00.000Z","2018-01-06T12:00:00.000Z","2018-01-06T13:00:00.000Z","2018-01-06T14:00:00.000Z","2018-01-06T15:00:00.000Z","2018-01-06T16:00:00.000Z","2018-01-06T17:00:00.000Z","2018-01-06T18:00:00.000Z","2018-01-06T19:00:00.000Z","2018-01-07T12:00:00.000Z","2018-01-07T13:00:00.000Z","2018-01-07T14:00:00.000Z","2018-01-07T15:00:00.000Z","2018-01-07T16:00:00.000Z","2018-01-07T17:00:00.000Z","2018-01-07T18:00:00.000Z","2018-01-07T19:00:00.000Z"]'),
  contact: {
    name: '',
    email: '',
    topic: 'workspace',
    message: '',
  },
};

class App extends Component {
  constructor(props) {
    super(props);

    const fromSaveLink = tryParseJSON(props.location && props.location.search);
    const state = defaultState//fromSaveLink ? fromSaveLink : store.get("data") || defaultState;

    this.state = {
      ...state,
      send: false,
      success: null,
    }

    this.setFormState = this.setFormState.bind( this )
    this.renderSwitch = this.renderSwitch.bind( this )
    this.handleSubmit = this.handleSubmit.bind( this )
  }

  componentDidMount() {
    store.set("data", this.state);
  }

  setFormState( state ) {
    this.setState( state )
  }

  onInputChange = (value, key) => {
    const sc = this.state.schedule
    console.log(sc)
    const newState = cloneDeep(this.state);
    set(newState, key, value);
    this.setState(newState);
    store.set("data", newState);
  };

  handleSubmit( event ) {
    event.preventDefault();
    const { name, email, topic, message } = this.state.contact
    const data = {
      email: email,
      name: name,
      topic: topic,
      message: message,
    }
    axios.post(`https://api.plathena.com/plathena/mail/contact-studentenfoto/`, data, )
      .then(res => {
        this.setState({
          send: true,
          success: true,
        })
      })
      .catch( err => {
        this.setState({
          success: false,
        })
      })
  }

  renderSwitch() {
    const { color } = this.props
    const { stage, extra, schedule, packageChoice, contact } = this.state
    switch( stage ) {
      case 0:
        return(
          <TwoTrainings
            color={color}
            setFormState={this.setFormState}
            {...this.props}
          />
        )
      case 1:
        return(
          <ExtraAndSchedule
            color={color}
            extra={extra}
            schedule={schedule}
            packageChoice={packageChoice}
            onInputChange={this.onInputChange}
            setFormState={this.setFormState}
            {...this.props}
          />
        )
      case 2:
        return(
          <Contact
            contact={contact}
            onInputChange={this.onInputChange}
            setFormState={this.setFormState}
            {...this.props}
          />
        )
      default:
        return(
          <TwoTrainings
            {...this.props}
            setFormState={this.setFormState}
          />
        );
    }
  }

  render() {
    return this.renderSwitch()
  }
}



App.propTypes = {
  color: PropTypes.string.isRequired,
};



export default App;
