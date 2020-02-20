import React, { Component } from "react";
import PropTypes from "prop-types";
import Card from '../CardEnroll'

class Start extends Component {
  render() {
    const { color, setFormState } = this.props
    return (
      <div>
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h4 className="title is-size-4 has-text-weight-bold is-bold-light">
                Je hebt gekozen om te komen trainen in categorie {color.verbose}.
              </h4>
              <p>
                 Wij willen graag een compleet en betrokken trainingsprogramma aanbieden. Om mee te kunnen doen met verschillende trainingen raden we aan om twee keer in de week te komen trainen. Zo leren kinderen de beter tennissen, en raken ze meer betrokken met hun vriendjes op de club.
              </p><br />
              <div className="columns">
                <div className="column">
                  <Card
                    name="1x / week"
                    color={color.code}
                    prePrice="slechts"
                    price={color === 'rood' ? 135 : 199}
                    items={["1x Tennis training / week", "Techniek", "Tactiek",  "Voetenwerk", ]}
                    action="Kies"
                    goTo={() => setFormState({ stage: 1, packageChoice: 'single' })}
                  />
                </div>
                <div className="column">
                  <Card
                    name="Basis Pakket"
                    color={color.code}
                    prePrice="slechts"
                    price={color === 'rood' ? 195 : 265}
                    items={["1x Tennis training / week", "1x skills training / week", "Mentale vaardigheden ontwikkelen", "Leren spelen van wedstrijden", "14 weken"]}
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
                    items={["1x Tennis training / week", "1x skills training / week", "Mentale vaardigheden ontwikkelen", "Leren spelen van wedstrijden"]}
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
