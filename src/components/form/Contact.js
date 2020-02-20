import React, { Component } from "react";
import 'date-fns';
import nlLocale from "date-fns/locale/nl";
import PropTypes from "prop-types";
import { colorPrices, extras } from './App'

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
    this.handleCompetitionChange = this.handleCompetitionChange.bind(this)
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
    const { contact, extra, priceSummary, onInputChange, setFormState, handleSubmit } = this.props;
    const priceColor = colorPrices[priceSummary.color.verbose]
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
        <div className="page__header">
          <div className="page__header__container">
            <h1 className="page__title">Hoe kunnen we u bereiken?</h1>
          </div>
        </div>
        <fieldset id="contact" className="fieldset fieldset--contact">
          <FormLabel component="legend">Bedankt. Vul dit formulier in en uw kind is onderdeel van het team. Let's go! </FormLabel>
          <div className="columns">
            <div className="column is-12">
              <TextField
                fullWidth
                variant="outlined"
                name="name_child"
                label="Hoeveel jaar heb jij tennistraining gehad?"
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
                <FormLabel component="legend">Hoeveel seizoenen heb jij meegetraind in de competitie?</FormLabel>
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
                  <FormControlLabel value="rood" control={<Radio />} label="Rood" />
                  <FormControlLabel value="oranje" control={<Radio />} label="Oranje" />
                  <FormControlLabel value="groen" control={<Radio />} label="Groen" />
                  <FormControlLabel value="geel" control={<Radio />} label="Geel" />
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
              <TextField
                fullWidth
                variant="outlined"
                name="name_child"
                label="Voornaam Kind"
                type="email"
                value={contact.first_name_child}
                onChange={event =>
                  onInputChange(event.target.value, ["contact", "first_name_child"])
                }
              />
            </div>
            <div className="column is-6">
              <TextField
                fullWidth
                variant="outlined"
                name="name_child"
                label="Achternaam Kind"
                type="email"
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
                <KeyboardDatePicker
                  fullWidth
                  variant="outlined"
                  inputVariant="outlined"
                  format="dd/MM/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label="Geboortedatum"
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
              <TextField
                fullWidth
                variant="outlined"
                name="email"
                autoComplete="email"
                label="Email"
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
              <TextField
                fullWidth
                variant="outlined"
                name="name_child"
                autoComplete="tel"
                label="Telefoonnummer"
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
                label="IBAN"
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
              <TextField
                fullWidth
                label="Naam op bankpas"
                variant="outlined"
                type="text"
                autoComplete="name"
                InputProps={{
                  startAdornment: <InputAdornment position="end"><CreditCardIcon/></InputAdornment>
                }}
                value={contact.name}
                onChange={event =>
                  onInputChange(event.target.value, ["contact", "name"])
                }
              />
            </div>
          </div>
          <div className="columns">
            <div className="column is-12">
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox checked={contact.check_transfer} onChange={event => onInputChange(event.target.checked, ["contact", "check_transfer"])} />
                  }
                  label={`Ik machtig Junior Joy om een eenmalige vergoeding van € ${ price } van mijn bankrekening te innen.`}
                />
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
          <Button onClick={handleSubmit} variant="contained" color="primary" className="btn is-pulled-right">
            Inschrijven
          </Button>
        </fieldset>
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
