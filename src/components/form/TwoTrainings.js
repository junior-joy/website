import React, { Component } from "react";
import PropTypes from "prop-types";
import Card from '../CardEnroll'
import { Link } from 'gatsby'

class Start extends Component {
  render() {
    const { color, setFormState } = this.props
    return (
      <div>
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h4 className="title is-size-4 has-text-weight-bold is-bold-light">
                Je hebt gekozen om te komen trainen in categorie {color.verbose.toUpperCase()}.
              </h4>
              <p>
                Tennis is leuk maar wel een moeilijk spel, daarom is onze visie dat we de jeugd het liefst minimaal 2x per week begeleiden. Op deze manier zal het kind sneller succesbeleving ervaren. Daarnaast maken kinderen sneller tennisvrienden als ze vaker andere kinderen op de club ontmoeten.<br /><br />
                Wij adviseren het basispakket; 1 x tennistraining en 1 x skillstraining per week. Maar je kunt ook 1 x per week of  juist meer dan 2 x per week komen trainen. Maak hieronder jouw keuze.
              </p><br />
              <Link className="btn-primary" to="/training/aanbod">
                Info Trainingspakketten →
              </Link><br /><br />
              <div className="columns">
                <div className="column">
                  <Card
                    name="1 x / week"
                    color={color.code}
                    prePrice=""
                    price={color === 'rood' ? 135 : 199}
                    items={["1 x Tennistraining / week", "", "",  "12 weken", ]}
                    action="Kies"
                    goTo={() => setFormState({ stage: 1, packageChoice: 'single' })}
                  />
                </div>
                <div className="column">
                  <Card
                    name="Basispakket"
                    color={color.code}
                    prePrice=""
                    price={color === 'rood' ? 195 : 265}
                    items={["1 x Tennistraining / week", "1 x Skillstraining / week", "", "", "","12 weken"]}
                    action="Kies"
                    goTo={() => setFormState({ stage: 1, packageChoice: 'basic' })}
                  />
                </div>
                <div className="column">
                  <Card
                    name="Uitgebreid pakket"
                    color={color.code}
                    prePrice="vanaf"
                    price={color === 'rood' ? 255 : 330}
                    items={["1 x Basispakket", "+ Training naar keuze", "", "12 weken"]}
                    action="Kies"
                    goTo={() => setFormState({ stage: 1, packageChoice: 'extra' })}
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
  setFormState: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
};

export default Start;
