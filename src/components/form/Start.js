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
                    image="https://res.cloudinary.com/junior-joy/image/upload/v1577894223/teun_ffehbw.png"
                    firstName="Rood"
                    fullName="Teun Kuijken"
                    quote='Vanaf jonge leeftijd wist ik het al: "Ik word later tennistrainer".'
                  />
                </div>
                <div className="column">
                  <Card
                    image="https://res.cloudinary.com/junior-joy/image/upload/v1577894223/teun_ffehbw.png"
                    firstName="Oranje"
                    fullName="Teun Kuijken"
                    quote='Vanaf jonge leeftijd wist ik het al: "Ik word later tennistrainer".'
                  />
                </div>
                <div className="column">
                  <Card
                    image="https://res.cloudinary.com/junior-joy/image/upload/c_scale,w_348/v1577894556/ray_foto_noh0tf.jpg"
                    firstName="Groen"
                    fullName="Raymon Janson"
                    quote='Met mijn enthousiasme, humor en vakmanschap begeleid ik de jeugd bij hun tennisontwikkeling.'
                  />
                </div>
                <div className="column">
                  <Card
                    image="https://res.cloudinary.com/dzbt2ovfb/image/upload/v1580400553/customers/junior-joy/raoul_myawek.jpg"
                    firstName="Geel"
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
