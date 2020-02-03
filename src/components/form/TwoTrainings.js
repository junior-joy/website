import React, { Component } from "react";
import PropTypes from "prop-types";
import { navigate } from 'gatsby'
import Card from '../CardEnroll'


import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

class Start extends Component {
  render() {
    const { color, goTo } = this.props
    return (
      <div>
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h4 className="title is-size-4 has-text-weight-bold is-bold-light">
                Je hebt gekozen om te komen trainen in categorie {color.verbose}. Wij willen graag een compleet en betrokken trainingsprogramma aanbieden. Om mee te kunnen doen met verschillende trainingen raden we aan om twee keer in de week te komen trainen. Zo leren kinderen de beter tennissen, en raken ze meer betrokken met hun vriendjes op de club.
              </h4>
              <div className="columns">
                <div className="column">
                  <Card
                    name="1x / week"
                    color={color.code}
                    prePrice="extra"
                    price={0}
                    items={["1x Tennis training / week", "Techniek", "Tactiek",  "Voetenwerk", ]}
                    action="Kies"
                    goTo={goTo}
                  />
                </div>
                <div className="column">
                  <Card
                    name="2x / week"
                    color={color.code}
                    prePrice="extra"
                    price={95}
                    items={["1x Tennis training / week", "1x skills training / week", "Mentale vaardigheden ontwikkelen", "Leren spelen van wedstrijden"]}
                    action="Kies"
                    goTo={goTo}
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
  color: PropTypes.string.isRequired,
};

export default Start;
