import React, { Component } from "react";
import PropTypes from "prop-types";
import { navigate, Link } from 'gatsby'
import Card from '../CardEnroll'
import { colorPrices } from './App'

class Start extends Component {
  render() {
    return (
      <div>
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h4 className="title is-size-4 has-text-weight-bold is-bold-light">
                Kies de categorie waarvoor jij wil inschrijven
              </h4>
              <p>
                Als je bij Junior Joy komt trainen dan ben je verplicht om lid te zijn van tennisvereniging Joy Jaagpad. Kijk op <a href="https://joyjaagpad.nl/lidmaatschap/">joyjaagpad.nl/lidmaatschap</a> voor meer informatie en inschrijven. De trainingsprijzen zijn exclusief contributie voor lidmaatschap.
              </p><br />
              <Link className="btn-primary" style={{ marginRight: '1rem', marginTop: '0.25rem' }} to="/training/categorieen">
                Info kleuren →
              </Link>
              <Link className="btn" style={{ marginTop: '0.25rem' }} to="/training/aanbod">
                Info aanbod →
              </Link><br /><br />
              <div className="columns">
                <div className="column">
                  <Card
                    name="Training ROOD"
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
                    name="Training ORANJE"
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
                    name="Training GROEN"
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
                    name="Training GEEL"
                    color="#F6F84C"
                    prePrice="vanaf"
                    price={colorPrices.geel}
                    items={["April - juli", "12 weken"]}
                    action="Inschrijven"
                    goTo={() => {
                      navigate('/training/inschrijven/geel')
                    }}
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
