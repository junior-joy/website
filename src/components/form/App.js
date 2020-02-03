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
  stage: "",
  schedule: [],
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

    this.goTo = this.goTo.bind( this )
    this.renderSwitch = this.renderSwitch.bind( this )
    this.handleSubmit = this.handleSubmit.bind( this )
  }

  componentDidMount() {
    store.set("data", this.state);
  }

  onInputChange = (value, key) => {
    const newState = cloneDeep(this.state);
    set(newState, key, value);
    this.setState(newState);
    store.set("data", newState);
  };

  goTo() {
    const { color } = this.props
    console.log(this.state)
    this.setState({ stage: color && color.verbose })
  }

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
    const { stage, schedule,  contact } = this.state
    switch( stage ) {
      case "":
        return(
          <TwoTrainings
            color={color}
            goTo={this.goTo}
            {...this.props}
          />
        )
      case "rood":
      case "oranje":
      case "groen":
      case "geel":
        return(
          <ExtraAndSchedule
            contact={contact}
            schedule={schedule}
            onInputChange={this.onInputChange}
            {...this.props}
          />
        )
      case "contact":
        return(
          <Contact
            contact={contact}
            onInputChange={this.onInputChange}
            {...this.props}
          />
        )
      default:
        return(
          <TwoTrainings
            {...this.props}
            goTo={this.goTo}
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
