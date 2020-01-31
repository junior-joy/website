import React, { Component } from "react";
import PropTypes from "prop-types";
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';
import InputMask from "react-input-mask";
import classNames from "classnames";
import Select from "./Select";
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Rating from '@material-ui/lab/Rating';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';

import FormLabel from '@material-ui/core/FormLabel';

class HouseHold extends Component {
  renderHistory = (history, index) => {
    const { onInputChange, onRemoveSection } = this.props;
    const selectClassNames = classNames({
      select: true,
      "select--state": true,
      "select-disabled": !history.state
    });
    function valuetext(value) {
      return `${value} personen`;
    }
    return (
      <li key={index}>
        <FormLabel align="left" omponent="legend">Aantal gebruikers</FormLabel>
        <Slider
          style={{ width: "70%", display: "inline-table", marginLeft: '0.5rem' }}
          defaultValue={2}
          getAriaValueText={valuetext}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="on"
          ThumbComponent="div"
          valueLabelFormat={(value) => ( value === 7 ) ? '7+' : value}
          step={1}
          marks
          min={1}
          max={7}
        />
        <Paper style={{ padding: '0.5rem', background: '#A52E3933' }}>
          <ul style={{ textAlign: 'left' }}>
            <li>Wasmachine: capaciteit van 5 of 6/7/8 kilo</li>
            <li>Droger: capaciteit van 5 of  kilo</li>
          </ul>
        </Paper>
        <Divider />
          <FormLabel align="left" omponent="legend">Minimale energielabel</FormLabel>
        <Rating name="size-large" defaultValue={2} style={{ marginLeft: "0.5rem", marginTop: "2rem" }}size="large" />
        <Paper style={{ padding: '0.5rem', background: '#A52E3933' }}>
          <ul style={{ textAlign: 'left' }}>
            <li>Wasmachine: capaciteit van 5 of 6/7/8 kilo</li>
            <li>Droger: capaciteit van 5 of  kilo</li>
          </ul>
        </Paper>
        {index !== 0 ? (
          <button
            id={`remove-rental-section-${index}`}
            className="btn btn--remove"
            onClick={event => onRemoveSection(event, "rentalHistory", index)}
          >
            <span />
          </button>
        ) : null}
      </li>
    );
  };

  render() {
    const { next, prev, device, household, onAddSection, toggleHeader, onInputChange, toDevice, toHousehold, toExtras } = this.props;
    const displayNumberOfPeople = (value) => ( value === 7 ) ? '7+' : value
    const adviceCapacityWasher = (people) => {
      if ( people <= 1 ) { return '5 kilo' }
      else if ( people <= 2 ) { return '6 kilo' }
      else if ( people <= 4 ) { return '7 kilo' }
      else if ( people <= 6 ) { return '8 kilo' }
      else { return '8 kilo of meer' }
    }
    const adviceCapacityDryer = (people) => {
      if ( people <= 4 ) { return '7 kilo' }
      else if ( people <= 6 ) { return '8 kilo' }
      else { return '8 kilo of meer' }
    }
    return (
      <div>
        <div className="page__header">
          <div className="page__header__container">
            <h1 className="page__title">Welk apparaat bent u naar opzoek?</h1>
            <p className="page__subtitle">
              Wij willen graag weten waar u naar op zoek bent, zodat we voor u een persoonlijk aanbod kunnen uitzoeken.
            </p>
            <button className="btn--header" onClick={toggleHeader}>
              <span />
            </button>
          </div>
        </div>
        <fieldset id="rent" className="fieldset fieldset--rent">
          <Stepper  alternativeLabel style={{ maxWidth: '80vw' }} activeStep={1}>
            <Step onClick={toDevice}>
              <StepLabel>Apparaat</StepLabel>
            </Step>
            <Step>
              <StepLabel>Huishouden</StepLabel>
            </Step>
            <Step>
              <StepLabel>Extras</StepLabel>
            </Step>
          </Stepper>
          <ul className="ol ol--rent" style={{ textAlign: 'left' }}>
            <li>
              <FormLabel align="left" omponent="legend">Aantal gebruikers</FormLabel>
              <Slider
                style={{ width: "70%", display: "inline-table", marginLeft: '0.5rem' }}
                defaultValue={2}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="on"
                ThumbComponent="div"
                valueLabelFormat={displayNumberOfPeople}
                step={1}
                marks
                min={1}
                max={7}
                value={household.numberOfUsers}
                onChange={(event, newValue) => onInputChange(newValue, ["household", "numberOfUsers"])}
              />
              <Paper style={{ padding: '0.5rem', background: '#A52E3933' }}>
                <ul style={{ textAlign: 'left' }}>
                  {device.washer ? (<li>Wasmachine: Bij {`${household.numberOfUsers}`} {(household.numberOfUsers===1) ? 'persoon' : 'personen'} raden wij aan een capaciteit van {adviceCapacityWasher(household.numberOfUsers)}.</li>) : '' }
                  {device.dryer ? (<li>Droger: Bij {`${household.numberOfUsers}`} {(household.numberOfUsers===1) ? 'persoon' : 'personen'} raden wij aan een capaciteit van {adviceCapacityDryer(household.numberOfUsers)}.</li>) : '' }
                </ul>
              </Paper>
              {/*
              <Divider />
                <FormLabel align="left" omponent="legend">Minimale energielabel</FormLabel>
              <Rating name="size-large" defaultValue={2} style={{ marginLeft: "0.5rem", marginTop: "2rem" }}size="large" />
              <Paper style={{ padding: '0.5rem', background: '#A52E3933' }}>
                <ul style={{ textAlign: 'left' }}>
                  {device.washer ? (<li>Wasmachine: Bij {`${household.numberOfUsers}`} personen raden wij aan een capaciteit van {adviceCapacityWasher(household.numberOfUsers)}</li>) : '' }
                  {device.dryer ? (<li>Droger:Bij {`${household.numberOfUsers}`} personen raden wij aan een capaciteit van 5 kilo</li>) : '' }
                  {device.dishwasher ? (<li>Vaatwasser: Bij {`${household.numberOfUsers}`} personen raden wij aan een capaciteit van 5 kilo</li>) : '' }
                  {device.fridge ? (<li>Koelkast: Bij {`${household.numberOfUsers}`} personen raden wij aan een capaciteit van 5 kilo</li>) : '' }
                </ul>
              </Paper>
              */}
            </li>
          </ul>
          <Button onClick={next} variant="contained" color="primary" className="btn is-pulled-right">
            Volgende
          </Button>
        </fieldset>
      </div>
    );
  }
}

HouseHold.propTypes = {
  next: PropTypes.func,
  prev: PropTypes.func,
  rentalHistory: PropTypes.array,
  onInputChange: PropTypes.func,
  onAddSection: PropTypes.func,
  onRemoveSection: PropTypes.func,
  toggleHeader: PropTypes.func
};

export default HouseHold;
