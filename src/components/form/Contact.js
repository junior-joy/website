import React, { Component } from "react";
import 'date-fns';
import nlLocale from "date-fns/locale/nl";
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import CheckboxValidatorElement from '../CheckboxValidator'
import DatePickerValidatorElement from '../DatePickerValidator'
import RadioValidator from '../RadioValidator'
import PropTypes from "prop-types";
import { colorPrices, extras, determineStartPrice } from './App'

import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import CreditCardIcon from '@material-ui/icons/CreditCard';

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import DateFnsUtils from '@date-io/date-fns';



class ContactInfo extends Component {
  constructor( props ) {
    super( props )
    this.state = {
      submitted: false,
      success: null,
    }
    this.handleCompetitionChange = this.handleCompetitionChange.bind(this)
  }

  componentDidMount() {
    ValidatorForm.addValidationRule('isTruthy', value => value);
  }

  handleCompetitionChange( event ) {
    const value = event.target.value
    const { onInputChange, setFormState } = this.props
    if ( value === "true" ) {
      onInputChange( value, ["contact", "competition_experience"] )
    } else {
      setFormState({
        contact: {
          competition_experience: value,
          competition_seasons_amount: "nvt",
        },
      })
    }
  }

  render() {
    const { contact, priceSummary, onInputChange, setFormState, handleSubmit, errorMessage } = this.props;
    const { submitted, success } = this.state
    const { color, packageChoice, extra } = priceSummary
    const priceColor = colorPrices[priceSummary.color.verbose]
    const extraItems = extras(color).filter( item => extra[item.value] )
    const totalPrice = determineStartPrice(color.verbose, packageChoice) + extraItems.reduce( (aa, bb) => aa + bb.price, 0 )
    var pricePackage = 0
    if ( !priceSummary.packageChoice === 'single' ) {
      const pricePackage = 200
    }
    var priceExtras = 0
    if ( priceSummary.packageChoice === 'extra' ) {
      priceExtras = extras(priceSummary.color).filter( item => extra[item.value] === true ).map(item => item.price ).reduce((acc, current) => acc + current, 0 )
    }
    const price = priceColor + pricePackage + priceExtras

    return (
      <div className="page">
        <ValidatorForm
          ref="form"
          onSubmit={handleSubmit}
        >
          <fieldset id="contact" className={`fieldset fieldset--contact ${ submitted ? '' : 'unsubmitted' }`}>
            <h4 className="title is-size-3 has-text-weight-bold is-bold-light">
              Jouw gegevens
            </h4>
            <p>Laat hieronder jouw gegevens achter. Nadat jij de inschrijving verstuurt gaan wij aan de slag met indelen.</p><br />
            <div className="columns">
              <div className="column is-12">
                <TextField
                  fullWidth
                  variant="outlined"
                  name="name_child"
                  label="Hoeveel jaar heb jij tennistraining gehad?"
                  validators={['required']}
                  errorMessages={['Dit veld is verplicht']}
                  type="number"
                  InputProps={{
                    endAdornment: <InputAdornment position="end">Jaar</InputAdornment>
                  }}
                  value={contact.years_tennis}
                  onChange={event =>
                    onInputChange(event.target.value, ["contact", "years_tennis"])
                  }
                />
              </div>
            </div>
            <div className="columns">
              <div className="column is-12">
                <FormControl component="fieldset">
                  <FormLabel component="legend">Heb jij al eens aan de competitie meegedaan?</FormLabel>
                  <RadioGroup
                    aria-label="gender"
                    name="gender1"
                    value={contact.competition_experience}
                    onChange={this.handleCompetitionChange}
                  >
                    <FormControlLabel value="true" control={<Radio />} label="Ja" />
                    <FormControlLabel value="false" control={<Radio />} label="Nee" />
                  </RadioGroup>
                </FormControl>
              </div>
            </div>
            <div className="columns">
              <div className="column is-12">
                <FormControl component="fieldset">
                  <FormLabel component="legend">Hoeveel seizoenen heb jij meegespeeld in de competitie?</FormLabel>
                  <RadioGroup
                    aria-label="gender"
                    name="gender1"
                    value={contact.competition_seasons_amount}
                    onChange={event =>
                      onInputChange(event.target.value, ["contact", "competition_seasons_amount"])
                    }
                  >
                    <FormControlLabel value="1" control={<Radio />} label="1 seizoen" />
                    <FormControlLabel value="2" control={<Radio />} label="2 seizoenen" />
                    <FormControlLabel value="3" control={<Radio />} label="3 of meer seizoenen" />
                    <FormControlLabel value="nvt" control={<Radio />} label="Niet van toepassing" />
                  </RadioGroup>
                </FormControl>
              </div>
            </div>
            <div className="columns">
              <div className="column is-12">
                <FormControl component="fieldset">
                  <FormLabel component="legend">In welke kleur heb jij vorig jaar meegetraind?</FormLabel>
                  <RadioGroup
                    aria-label="gender"
                    name="gender1"
                    value={contact.color_last_year}
                    onChange={event =>
                      onInputChange(event.target.value, ["contact", "color_last_year"])
                    }
                  >
                    <FormControlLabel value="rood" control={<Radio />} label="ROOD" />
                    <FormControlLabel value="oranje" control={<Radio />} label="ORANJE" />
                    <FormControlLabel value="groen" control={<Radio />} label="GROEN" />
                    <FormControlLabel value="geel" control={<Radio />} label="GEEL" />
                    <FormControlLabel value="nvt" control={<Radio />} label="Niet van toepassing" />
                  </RadioGroup>
                </FormControl>
              </div>
            </div>
            <div className="columns">
              <div className="column is-12">
                <FormControl component="fieldset">
                  <FormLabel component="legend">Bij welke trainer heb jij vorig seizoen getraind?</FormLabel><br/>
                  <RadioGroup
                    aria-label="gender"
                    name="gender1"
                    value={contact.trainer_last_year}
                    onChange={event =>
                      onInputChange(event.target.value, ["contact", "trainer_last_year"])
                    }
                  >
                    <FormControlLabel value="anders" control={<Radio />} label={
                      <TextField
                        fullWidth
                        variant="outlined"
                        name="name_child"
                        label="Ik heb getraind bij"
                        type="text"
                        value={contact.other_trainer_last_year}
                        onChange={event =>
                            onInputChange(event.target.value, ["contact", "other_trainer_last_year"])
                        }
                      />
                    } />
                    <FormControlLabel value="nvt" control={<Radio />} label="Niet van toepassing" />
                  </RadioGroup>
                </FormControl>
              </div>
            </div>
            <div className="columns">
              <div className="column is-6">
                <TextValidator
                  fullWidth
                  variant="outlined"
                  name="name_child"
                  label="Voornaam kind"
                  validators={['required']}
                  errorMessages={['Dit veld is verplicht']}
                  type="text"
                  value={contact.first_name_child}
                  onChange={event =>
                    onInputChange(event.target.value, ["contact", "first_name_child"])
                  }
                />
              </div>
              <div className="column is-6">
                <TextValidator
                  fullWidth
                  variant="outlined"
                  name="name_child"
                  label="Achternaam kind"
                  validators={['required']}
                  errorMessages={['Dit veld is verplicht']}
                  type="text"
                  value={contact.last_name_child}
                  onChange={event =>
                    onInputChange(event.target.value, ["contact", "last_name_child"])
                  }
                />
              </div>
            </div>
            <div className="columns">
              <div className="column is-12">
                <MuiPickersUtilsProvider utils={DateFnsUtils} locale={nlLocale}>
                  <DatePickerValidatorElement
                    fullWidth
                    variant="outlined"
                    inputVariant="outlined"
                    format="dd/MM/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    invalidDateMessage="Selecteer een geldige datum"
                    label="Geboortedatum kind"
                    validators={['required']}
                    errorMessages={['Dit veld is verplicht']}
                    value={contact.date_of_birth_child}
                    onChange={event =>
                      onInputChange(event, ["contact", "date_of_birth_child"])
                    }
                    openTo={"year"}
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                  />
                </MuiPickersUtilsProvider>
              </div>
            </div>
            <div className="columns">
              <div className="column is-12">
                <TextValidator
                  fullWidth
                  variant="outlined"
                  name="email"
                  autoComplete="email"
                  label="Email"
                  validators={['required', 'isEmail']}
                  errorMessages={['Dit veld is verplicht', 'email is niet geldig']}
                  type="email"
                  InputProps={{
                    startAdornment: <InputAdornment position="end"><MailIcon/></InputAdornment>
                  }}
                  value={contact.email}
                  onChange={event =>
                    onInputChange(event.target.value, ["contact", "email"])
                  }
                />
              </div>
            </div>
            <div className="columns">
              <div className="column is-12">
                <TextValidator
                  fullWidth
                  variant="outlined"
                  name="name_child"
                  autoComplete="tel"
                  label="Telefoonnummer"
                  validators={['required']}
                  errorMessages={['Dit veld is verplicht']}
                  type="number"
                  InputProps={{
                    startAdornment: <InputAdornment position="end"><PhoneIcon/></InputAdornment>
                  }}
                  value={contact.phone}
                  onChange={event =>
                    onInputChange(event.target.value, ["contact", "phone"])
                  }
                />
              </div>
            </div>
            <div className="columns">
              <div className="column is-12">
                <TextField
                  fullWidth
                  multiline={true}
                  rows={6}
                  rowsMax={32}
                  label="Opmerkingen"
                  variant="outlined"
                  type="text"
                  value={contact.comment}
                  onChange={event =>
                    onInputChange(event.target.value, ["contact", "comment"])
                  }
                />
              </div>
            </div>
            <div className="columns">
              <div className="column is-12">
                <FormControl component="fieldset">
                  <FormLabel component="legend">Kies een betaalmethode</FormLabel>
                  <RadioValidator
                    aria-label="gender"
                    name="gender1"
                    value={contact.check_transfer}
                    validators={['required']}
                    errorMessages={['Dit veld is verplicht']}
                    onChange={event =>
                      onInputChange(event.target.value, ["contact", "check_transfer"])
                    }
                  >
                    <FormControlLabel value="transfer" control={<Radio />} label={`Ik machtig Junior Joy om een eenmalige vergoeding van € ${ totalPrice } van mijn bankrekening te innen. `} />
                    { contact.check_transfer==='transfer' && (
                      <div >
                        <br /><div className="columns">
                          <div className="column is-12">
                            <TextValidator
                              fullWidth
                              label="IBAN"
                              validators={['required']}
                              errorMessages={['Dit veld is verplicht']}
                              variant="outlined"
                              type="text"
                              InputProps={{
                                startAdornment: <InputAdornment position="end"><CreditCardIcon/></InputAdornment>
                              }}
                              value={contact.iban}
                              onChange={event =>
                                onInputChange(event.target.value, ["contact", "iban"])
                              }
                            />
                          </div>
                        </div>
                        <div className="columns">
                          <div className="column is-12">
                            <TextValidator
                              fullWidth
                              label="Naam op bankpas"
                              validators={['required']}
                              errorMessages={['Dit veld is verplicht']}
                              variant="outlined"
                              type="text"
                              autoComplete="name"
                              InputProps={{
                                startAdornment: <InputAdornment position="end"><CreditCardIcon/></InputAdornment>
                              }}
                              value={contact.name_card}
                              onChange={event =>
                                onInputChange(event.target.value, ["contact", "name_card"])
                              }
                            />
                          </div>
                        </div>
                      </div>
                    )}
                    <FormControlLabel value="invoice" control={<Radio />} label="Ik betaal via de factuur in de email" />
                  </RadioValidator>
                </FormControl>
              </div>
            </div>
            <div className="columns">
              <div className="column is-12">
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox checked={contact.check_newsletter} onChange={event => onInputChange(event.target.checked, ["contact", "check_newsletter"])} />
                    }
                    label="Ik wil de nieuwsbrief ontvangen."
                  />
                </FormGroup>
              </div>
            </div>
            <Button onClick={() => setFormState({ stage: 1 })} variant="contained" color="primary" className="btn">
              Terug
            </Button>
            <Button onClick={() => this.setState({ submitted: true })} type="submit" variant="contained" color="primary" className="btn is-pulled-right">
              Inschrijven
            </Button>
            { submitted && !success && errorMessage && (
              <p>Er is iets fout gegaan. {errorMessage}</p>
            )}
          </fieldset>
        </ValidatorForm>
      </div>
    );
  }
}

ContactInfo.propTypes = {
  onInputChange: PropTypes.func,
  toggleHeader: PropTypes.func,
  handleSubmit: PropTypes.func,
  setFormState: PropTypes.func,
};

export default ContactInfo;
