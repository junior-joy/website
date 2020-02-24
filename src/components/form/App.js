/* globals window, document */
import React, { Component } from "react";
import PropTypes from "prop-types";
import {  BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from 'axios';
import set from "lodash/set";
import cloneDeep from "lodash/cloneDeep";
import store from "store2";
import { tryParseJSON } from "../../utils/helpers";

import CardSummary from "../CardSummary"
import TwoTrainings from "./TwoTrainings";
import Contact from "./Contact";
import Thanks from "./Thanks";
import ExtraAndSchedule from "./ExtraAndSchedule";

import './form.css'


export const colorPrices = {
  rood: 135,
  oranje: 199,
  groen: 199,
  geel: 199,
}



export const determineStartPrice = ( color, packageChoice ) => {
  switch( packageChoice ) {
    case 'single':
      return color === 'rood' ? 135 : 199
    case 'basic':
      return color === 'rood' ? 195 : 265
    case 'extra':
      return color === 'rood' ? 195 : 265
  }
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
    date_of_birth_child: new Date(),
    email: '',
    phone: null,
    iban: 'NL',
    name_card: '',
    check_transfer: false,
    check_newsletter: false,
    comment: '',
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
    const { color } = this.props
    const { extra, packageChoice, contact, } = this.state
    const {
      email,
      first_name_child,
      last_name_child,
      date_of_birth_child,
      phone,
      comment,
      iban,
      name_card,
      years_tennis,
      competition_experience,
      competition_seasons_amount,
      color_last_year,
      trainer_last_year,
    } = contact
    const priceColor = colorPrices[color.verbose]
    const extraItems = extras(color).filter( item => extra[item.value] )
    const totalPrice = determineStartPrice(color.verbose, packageChoice) + extraItems.reduce( (aa, bb) => aa + bb.price, 0 )
    const data = {
      totalPrice: totalPrice,
      color: color.verbose,
      packageChoice: packageChoice,
      extraItems: extraItems,
      email: email,
      first_name_child: first_name_child,
      last_name_child: last_name_child,
      date_of_birth_child: date_of_birth_child,
      phone: phone,
      comment: comment,
      iban: iban,
      name_card: name_card,
      years_tennis: years_tennis,
      competition_experience: competition_experience,
      competition_seasons_amount: competition_seasons_amount,
      color_last_year: color_last_year,
      trainer_last_year: trainer_last_year,
    }
    axios.post(`http://localhost:8888/.netlify/functions/sheets`, data, )
      .then(res => {
        this.setState({ stage: 3 })
      })
      .catch( err => {
        console.log('comething went wrong')
      })
  }

  renderSwitch() {
    const { color } = this.props
    const { stage, extra, schedule, packageChoice, contact } = this.state
    const priceSummary = {
      color: color,
      packageChoice: packageChoice,
      extra: extra,
      email: contact.email,
      phone: contact.phone,
      comment: contact.comment,
      first_name_child: contact.first_name_child,
      last_name_child: contact.last_name_child,
      iban: contact.iban,
      name_card: contact.name_card,
      check_transfer: contact.check_transfer,
      check_newsletter: contact.check_newsletter,
      years_tennis: contact.years_tennis,
      competition_experience: contact.competition_experience,
      competition_seasons_amount: contact.competition_seasons_amount,
      color_last_year: contact.color_last_year,
      trainer_last_year: contact.trainer_last_year,
      other_trainer_last_year: contact.other_trainer_last_year,
      date_of_birth_child: contact.date_of_birth_child,
      schedule: schedule,
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
            color={color}
            contact={contact}
            extra={extra}
            priceSummary={priceSummary}
            onInputChange={this.onInputChange}
            setFormState={this.setFormState}
            handleSubmit={this.handleSubmit}
            {...this.props}
          />
        )
      case 3:
        return(
          <Thanks
            contact={contact}
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
    const { color } = this.props
    const renderSwitch = this.renderSwitch()
    const { stage, packageChoice, extra } = this.state

    const priceSummary = {
      color: color,
      packageChoice: packageChoice,
      extra: extra,
    }
    return(
      <div className="">
        <div className="columns reverse-columns">
          <div
            className={`column ${ stage !== 0 && 'is-10 constrained-column' }`}
            style={{ marginBottom: '6rem' }}
          >
            {renderSwitch}
          </div>
          {stage !== 0 && (
            <div className="column desktop-only">
              <CardSummary priceSummary={priceSummary} />
            </div>
          )}
        </div>
      </div>
    )
  }
}



App.propTypes = {
  color: PropTypes.object.isRequired,
};



export default App;
