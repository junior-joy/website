import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from '@material-ui/core/Button';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';


import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

import Select from '@material-ui/core/Select';

import MenuItem from '@material-ui/core/MenuItem';

class Extras extends Component {
  renderHistory = (history, index) => {
    const { next, prev, onInputChange, onRemoveSection } = this.props;
    return (
      <li key={index}>
        <FormGroup>
          <FormLabel align="left" omponent="legend">Wasmachine</FormLabel>
          <FormControlLabel
            control={
              <Checkbox checked={false} onChange={event => onInputChange(event.target.checked, ["summary", "washer"])} value={false} />
            }
            label="Tijdsaanduiding"
          />
          <FormHelperText>Some important helper text</FormHelperText>
          <FormControlLabel
            control={
              <Checkbox checked={false} onChange={event => onInputChange(event.target.checked, ["summary", "dryer"])} value={false} />
            }
            label="Weinig geluid"
          />
          <FormControlLabel
            control={
              <Checkbox checked={false} onChange={event => onInputChange(event.target.checked, ["summary", "dishwasher"])} value={false} />
            }
            label="Veel toeren"
          />
        </FormGroup>
        <Divider style={{ marginBottom: '2rem' }} />
          <FormGroup>
            <FormLabel align="left" omponent="legend">Droger</FormLabel>
            <FormControlLabel
              control={
                <Checkbox checked={false} onChange={event => onInputChange(event.target.checked, ["summary", "washer"])} value={false} />
              }
              label="Tijdsaanduiding"
            />
            <FormControlLabel
              control={
                <Checkbox checked={false} onChange={event => onInputChange(event.target.checked, ["summary", "dryer"])} value={false} />
              }
              label="Weinig geluid"
            />
            <FormControlLabel
              control={
                <Checkbox checked={false} onChange={event => onInputChange(event.target.checked, ["summary", "dishwasher"])} value={false} />
              }
              label="Veel toeren"
            />
          </FormGroup>
        <Divider style={{ marginBottom: '2rem' }} />
          <FormGroup>
            <FormLabel align="left" omponent="legend">Vaatwasser</FormLabel>
            <FormControlLabel
              control={
                <Checkbox checked={false} onChange={event => onInputChange(event.target.checked, ["summary", "dryer"])} value={false} />
              }
              label="Weinig geluid"
            />
          </FormGroup>
        <Divider style={{ marginBottom: '2rem' }} />
          <FormGroup>
            <FormLabel align="left" omponent="legend">Koelkast</FormLabel>
              <Select
                id={`name${index > 0 ? `-contact-section-${index}` : ""}`}
                helperText="Wij vinden de goedkoopse lease in uw provincie"
                fullWidth
                label="Provincie"
                variant="outlined"
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value="tiepe"
                onChange={event =>
                  onInputChange(event.target.value, ["people", index, "province"])
                }
              >
                <MenuItem value={1}>Groningen</MenuItem>
                <MenuItem value={2}>Friesland</MenuItem>
                <MenuItem value={3}>Drenthe</MenuItem>
                <MenuItem value={4}>Overijssel</MenuItem>
                <MenuItem value={5}>Flevoland</MenuItem>
                <MenuItem value={6}>Gelderland</MenuItem>
                <MenuItem value={7}>Utrecht</MenuItem>
                <MenuItem value={8}>Noord-Holland</MenuItem>
                <MenuItem value={9}>Zuid-Holland</MenuItem>
                <MenuItem value={10}>Zeeland</MenuItem>
                <MenuItem value={11}>Noord-Brabant</MenuItem>
                <MenuItem value={12}>Limburg</MenuItem>
              </Select>
            <FormControlLabel
              control={
                <Checkbox checked={false} onChange={event => onInputChange(event.target.checked, ["summary", "dryer"])} value={false} />
              }
              label="Weinig geluid"
            />
          </FormGroup>
        {index > 0 ? (
          <button
            id={`remove-employment-section-${index}`}
            className="btn btn--remove"
            onClick={event =>
              onRemoveSection(event, "employmentHistory", index)
            }
          >
            <span />
          </button>
        ) : null}
      </li>
    );
  };

  render() {
    const { extras, device, onAddSection, toggleHeader, onInputChange, toDevice, toHousehold, toExtras } = this.props;
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
        <fieldset id="employment" className="fieldset fieldset--employment">
          <Stepper alternativeLabel style={{ maxWidth: '80vw' }} activeStep={3}>
            <Step onClick={toDevice}>
              <StepLabel>Apparaat</StepLabel>
            </Step>
              <Step onClick={toHousehold}>
              <StepLabel>Huishouden</StepLabel>
            </Step>
            <Step>
              <StepLabel>Extras</StepLabel>
            </Step>
          </Stepper>
          <ul className="ol ol--employment">
            <li>
              {device.washer && (
                <div>
                  <FormGroup>
                    <FormLabel align="left" omponent="legend">Wasmachine</FormLabel>
                      <FormControlLabel
                        control={
                          <Checkbox checked={extras.washer.time} onChange={event => onInputChange(event.target.checked, ["extras", "washer", "time"])} />
                        }
                        label="Tijdsaanduiding"
                      />
                      <FormHelperText>Sommige mensen vinden het handig als er een display is, dat aangeeft hoe lang de wasbeurt nog duurt.</FormHelperText>
                      <FormControlLabel
                        control={
                          <Checkbox checked={extras.washer.soundVolume} onChange={event => onInputChange(event.target.checked, ["extras", "washer", "soundVolume"])} />
                        }
                        label="Weinig geluid"
                      />
                      <FormHelperText>Is het belangrijk voor u, dat het geluid onder 35 decibel blijft?</FormHelperText>
                      <FormControlLabel
                        control={
                          <Checkbox checked={extras.washer.turningSpeed} onChange={event => onInputChange(event.target.checked, ["extras", "washer", "turningSpeed"])} />
                        }
                        label="Hoog toerental"
                      />
                    </FormGroup>
                    <FormHelperText>Een toerental boven de 1400 zorgt voor drogere kleding. Dit is vooral belangrijk wanneer u geen droger heeft.</FormHelperText>
                    <Divider style={{ marginBottom: '2rem' }} />
                  </div>
                )}
                {device.dryer && (
                  <FormGroup>
                    <FormLabel align="left" omponent="legend">Droger</FormLabel>
                    <FormControlLabel
                      control={
                        <Checkbox checked={extras.dryer.time} onChange={event => onInputChange(event.target.checked, ["extras", "dryer", "time"])} />
                      }
                      label="Tijdsaanduiding"
                    />
                    <FormHelperText>Sommige mensen vinden het handig als er een display is, dat aangeeft hoe lang de wasbeurt nog duurt.</FormHelperText>
                    <FormControlLabel
                      control={
                        <Checkbox checked={extras.dryer.soundVolume} onChange={event => onInputChange(event.target.checked, ["extras", "dryer", "soundVolume"])} />
                      }
                      label="Weinig geluid"
                    />
                    <FormHelperText>Is het belangrijk voor u, dat het geluid onder 35 decibel blijft?</FormHelperText>
                  </FormGroup>
                )}
              <Divider style={{ marginBottom: '2rem' }} />
            </li>
          </ul>
          <Button onClick={this.props.next} variant="contained" color="primary" className="btn is-pulled-right">
            Volgende
          </Button>
        </fieldset>
      </div>
    );
  }
}

Extras.propTypes = {
  employmentHistory: PropTypes.array,
  onInputChange: PropTypes.func,
  onAddSection: PropTypes.func,
  onRemoveSection: PropTypes.func,
  toggleHeader: PropTypes.func
};

export default Extras;
