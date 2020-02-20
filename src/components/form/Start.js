import React, { Component } from "react";
import PropTypes from "prop-types";
import { navigate } from 'gatsby'
import Card from '../CardEnroll'
import { colorPrices } from './App'

class Start extends Component {
  render() {
    return (
      <div>
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                Schrijf je in
              </h2>
              <div className="columns">
                <div className="column">
                  <Card
                    name="Pakket Rood"
                    color="#F64E4C"
                    prePrice="vanaf"
                    price={colorPrices.rood}
                    items={["April - juli", "12 weken"]}
                    action="Inschrijven"
                    goTo={() => navigate('/training/inschrijven/rood')}
                  />
                </div>
                <div className="column">
                  <Card
                    name="Pakket Oranje"
                    color="#F6924C"
                    prePrice="vanaf"
                    price={colorPrices.oranje}
                    items={["April - juli", "12 weken"]}
                    action="Inschrijven"
                    goTo={() => navigate('/training/inschrijven/oranje')}
                  />
                </div>
                <div className="column">
                  <Card
                    name="Pakket Groen"
                    color="#57CCA4"
                    prePrice="vanaf"
                    price={colorPrices.groen}
                    items={["April - juli", "12 weken"]}
                    action="Inschrijven"
                    goTo={() => navigate('/training/inschrijven/groen')}
                  />
                </div>
                <div className="column">
                  <Card
                    name="Pakket Geel"
                    color="#F6F84C"
                    prePrice="vanaf"
                    price={colorPrices.geel}
                    items={["April - juli", "12 weken"]}
                    action="Inschrijven"
                    goTo={() => navigate('/training/inschrijven/geel')}
                  />
                </div>
              </div>
              <br/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Start.propTypes = {
  goTo: PropTypes.func.isRequired,
};

export default Start;
