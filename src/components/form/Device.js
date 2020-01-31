import React from "react";
import PropTypes from "prop-types";
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

function Device({ next, prev, device, onInputChange, toggleHeader, toDevice, toHousehold, toExtras  }) {
  const { washer, dryer, dishwasher, fridge } = device
  console.log( toHousehold )
  return (
    <div>
      <div className="page__header">
        <div className="page__header__container">
          <h1 className="page__title">Welk apparaat bent u naar opzoek?</h1>
          <p className="page__subtitle">
            Wij willen graag weten waar u naar op zoek bent, zodat we voor u een persoonlijk aanbod kunnen uitzoeken.
          </p>
        </div>
        <button className="btn--header" onClick={toggleHeader}>
          <span />
        </button>
      </div>
      <fieldset id="summary" className="fieldset fieldset--summary">
        <FormLabel component="legend">Bedankt voor uw interesse. Beantwoord deze drie vragen om een persoonlijke deal te ontvangen.</FormLabel>
        <Stepper alternativeLabel style={{ maxWidth: '80vw' }} activeStep={0}>
          <Step>
            <StepLabel>Apparaat</StepLabel>
          </Step>
          <Step>
            <StepLabel>Huishouden</StepLabel>
          </Step>
          <Step>
            <StepLabel>Extras</StepLabel>
          </Step>
        </Stepper>
        <FormGroup>
          <FormLabel component="legend">Geef aan wat u wilt huren</FormLabel>
          <FormControlLabel
            control={
              <Checkbox checked={washer} onChange={event => onInputChange(event.target.checked, ["device", "washer"])} value={false} />
            }
            label="Wasmachine"
          />
          <FormControlLabel
            control={
              <Checkbox checked={dryer} onChange={event => onInputChange(event.target.checked, ["device", "dryer"])} value={false} />
            }
            label="Droger"
          />
          {/*
          <FormControlLabel
            control={
              <Checkbox checked={dishwasher} onChange={event => onInputChange(event.target.checked, ["device", "dishwasher"])} value={false} />
            }
            label="Vaatwasser"
          />
          <FormControlLabel
            control={
              <Checkbox checked={fridge} onChange={event => onInputChange(event.target.checked, ["device", "fridge"])} value={false} />
            }
            label="Koelkast"
          />
          */}
        </FormGroup>
        <FormHelperText></FormHelperText>
        <Button onClick={next} variant="contained" color="primary" className="btn is-pulled-right">
          Volgende
        </Button>
      </fieldset>
    </div>
  );
}

Device.propTypes = {
  next: PropTypes.func,
  prev: PropTypes.func,
  device: PropTypes.object,
  onInputChange: PropTypes.func,
  toggleHeader: PropTypes.func
};

export default Device;
