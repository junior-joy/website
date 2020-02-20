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


export const colorPrices = {
  rood: 135,
  oranje: 199,
  groen: 199,
  geel: 199,
}



export const extras = color =>  [
  {
    value: 'group',
    label: (color.verbose==='rood') ? 'groepstraining rood - 12 weken' : 'groepstraining - 12 weken',
    price: (color.verbose==='rood') ? 115 : 180,
  },
  {
    value: 'prive',
    label: 'priveles - 12 weken',
    price: 640,
  },
  {
    value: 'prive5',
    label: 'priveles strippenkaart - 5 keer',
    price: 275,
  },
  {
    value: 'prive1',
    label: 'priveles - 1 keer',
    price: 60,
  },
  {
    value: 'duo',
    label: 'Duo training - 12 weken',
    price: 320,
  },
]



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
  schedule: [],
  contact: {
    years_tennis: null,
    competition_experience: null,
    competition_seasons_amount: null,
    color_last_year: null,
    trainer_last_year: null,
    other_trainer_last_year: null,
    first_name_child: '',
    last_name_child: '',
    date_of_birth_child: null,
    email: '',
    phone: null,
    iban: 'NL',
    name_card: '',
    check_transfer: false,
    check_newsletter: false,
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
    const newState = cloneDeep(this.state);
    set(newState, key, value);
    this.setState(newState);
    store.set("data", newState);
  };

  handleSubmit( event ) {
    event.preventDefault();
    const data = {
      value: 'test'
    }
    axios.post(`/.netlify/lambda/sheets`, data, )
      .then(res => {
        this.setState({
          stage: 0,
        })
      })
      .catch( err => {
        this.setState({
          stage: 0,
        })
      })
  }

  renderSwitch() {
    const { color } = this.props
    const { stage, extra, schedule, packageChoice, contact } = this.state
    const priceSummary = {
      color: color,
      packageChoice: packageChoice,
      extra: extra,
    }
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
            extra={extra}
            priceSummary={priceSummary}
            onInputChange={this.onInputChange}
            setFormState={this.setFormState}
            handleSubmit={this.handleSubmit}
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
  color: PropTypes.object.isRequired,
};



export default App;
