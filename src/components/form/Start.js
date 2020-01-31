import React, { Component } from "react";
import PropTypes from "prop-types";
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
    const { contact,  toggleHeader, onInputChange } = this.props;
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
                    price={195}
                    ageMin={0}
                    ageMax={6}
                    items={["2x/week training"]}
                    fullName="Teun Kuijken"
                    quote='Vanaf jonge leeftijd wist ik het al: "Ik word later tennistrainer".'
                  />
                </div>
                <div className="column">
                  <Card
                    name="Pakket Oranje"
                    color="#F6924C"
                    price={265}
                    ageMin={4}
                    ageMax={8}
                    items={["2x/week training"]}
                    fullName="Teun Kuijken"
                    quote='Vanaf jonge leeftijd wist ik het al: "Ik word later tennistrainer".'
                  />
                </div>
                <div className="column">
                  <Card
                    name="Pakket Groen"
                    color="#57CCA4"
                    price={265}
                    ageMin={8}
                    ageMax={10}
                    items={["2x/week training"]}
                    fullName="Raymon Janson"
                    quote='Met mijn enthousiasme, humor en vakmanschap begeleid ik de jeugd bij hun tennisontwikkeling.'
                  />
                </div>
                <div className="column">
                  <Card
                    name="Pakket Geel"
                    color="#F6F84C"
                    price={265}
                    ageMin={10}
                    ageMax={12}
                    items={["2x/week training"]}
                    fullName="Raoul Killaars"
                    quote='Plezier, enthousiasme en een positieve mentaliteit vind ik belangrijke elementen.'
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
  contact: PropTypes.object,
  onInputChange: PropTypes.func,
  onRemoveSection: PropTypes.func,
  toggleHeader: PropTypes.func
};

export default Start;
