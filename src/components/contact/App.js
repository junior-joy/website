/* globals window, document */
import React, { Component } from "react";
import {  BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from 'axios';
import set from "lodash/set";
import cloneDeep from "lodash/cloneDeep";
import store from "store2";
import { tryParseJSON } from "../../utils/helpers";

import Start from "./Start";
import Thanks from "./Thanks";

import './form.css'

const defaultState = {
  stage: 1,
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
    const state = fromSaveLink ? fromSaveLink : store.get("data") || defaultState;

    this.state = {
      ...state,
      send: false,
      success: null,
    }

    this.next = this.next.bind( this )
    this.prev = this.prev.bind( this )
    this.reset = this.reset.bind( this )
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

  onAddSection = (event, section) => {
    event.preventDefault();
    const newState = { ...this.state };
    newState[section].push(defaultState[section][0]);
    this.setState(newState);
    store.set("data", newState);
  };

  onRemoveSection = (event, section, index) => {
    event.preventDefault();
    const newState = { ...this.state };
    newState[section].splice(index, 1);
    this.setState(newState);
    store.set("data", newState);
  };

  toggleMenu() {
    const app = document.getElementById("___gatsby");
    app.classList.toggle("toggle--active");
  }

  toggleHeader() {
    const app = document.getElementById("___gatsby");
    app.classList.toggle("btn--header--active");
  }

  closeMenu() {
    const app = document.getElementById("___gatsby");
    app.classList.remove("toggle--active");
  }

  next() {
    this.setState({ stage: this.state.stage + 1 })
  }

  prev() {
    this.setState({ stage: this.state.stage - 1 })
  }

  reset() {
    this.setState({ stage: 1 })
  }

  handleSubmit( event ) {
    event.preventDefault();
    const { name, email, topic, message } = this.state.contact
    const data = {
      email: email,
      naam: name,
      topic: topic,
      message: message,
    }
    axios.post(`https://api.plathena.com/plathena/mail/contact/junior-joy/`, data, )
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
    const { send } = this.state
    switch( send ) {
      case true:
        return(
          <Thanks
            {...this.props}
            contact={this.state.contact}
          />
        )
      default:
        return(
          <Start
            {...this.props}
            contact={this.state.contact}
            onInputChange={this.onInputChange}
            toggleHeader={this.toggleHeader}
            handleSubmit={this.handleSubmit}
          />
        );
    }
  }

  render() {
    return this.renderSwitch()
  }
}

export default App;
