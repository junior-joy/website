import React, { Component } from "react";
import 'date-fns';
import nlLocale from "date-fns/locale/nl";
import PropTypes from "prop-types";
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

  render() {
    const { contact, onInputChange, setFormState, handleSubmit } = this.props;
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
              value={contact.name_child}
              onChange={event =>
                onInputChange(event.target.value, ["contact", "name_child"])
              }
            />
          </div>
        </div>
        <div className="columns">
          <div className="column is-12">
            <FormControl component="fieldset">
              <FormLabel component="legend">Heb jij al eens aan de competitie meegedaan?</FormLabel>
              <RadioGroup aria-label="gender" name="gender1">
                <FormControlLabel value={false} control={<Radio />} label="Ja" />
                <FormControlLabel control={<Radio />} label="Nee" />
              </RadioGroup>
            </FormControl>
          </div>
        </div>
        <div className="columns">
          <div className="column is-12">
            <FormControl component="fieldset">
              <FormLabel component="legend">Hoeveel seizoenen heb jij meegetraind in de competitie?</FormLabel>
              <RadioGroup aria-label="gender" name="gender1">
                <FormControlLabel value={false} control={<Radio />} label="Rood" />
                <FormControlLabel value={false} control={<Radio />} label="1 seizoen" />
                <FormControlLabel value={false} control={<Radio />} label="2 seizoenen" />
                <FormControlLabel value={false} control={<Radio />} label="meer dan 3 seizoenen" />
                <FormControlLabel value={false} control={<Radio />} label="Niet van toepassing" />
              </RadioGroup>
            </FormControl>
          </div>
        </div>
        <div className="columns">
          <div className="column is-12">
            <FormControl component="fieldset">
              <FormLabel component="legend">In welke kleur heb jij vorig jaar meegetraind?</FormLabel>
              <RadioGroup aria-label="gender" name="gender1">
                <FormControlLabel value={false} value={false} control={<Radio />} label="Rood" />
                <FormControlLabel value={false} control={<Radio />} label="Oranje" />
                <FormControlLabel value={false} control={<Radio />} label="Groen" />
                <FormControlLabel value={false} control={<Radio />} label="Niet van toepassing" />
              </RadioGroup>
            </FormControl>
          </div>
        </div>
        <div className="columns">
          <div className="column is-12">
            <FormControl component="fieldset">
              <FormLabel component="legend">Bij welke trainer heb jij vorig seizoen getraind?</FormLabel>
              <RadioGroup aria-label="gender" name="gender1">
                <FormControlLabel value={false} control={<Radio />} label="Teun Kuijken" />
                <FormControlLabel value={false} control={<Radio />} label="Raymon Janson" />
                <FormControlLabel value={false} control={<Radio />} label="Raoul Killaars" />
                <FormControlLabel control={<Radio />} label={
                  <TextField
                    fullWidth
                    variant="outlined"
                    name="name_child"
                    label="Bij iemand anders"
                    type="text"
                    value={contact.name_child}
                    onChange={event =>
                      onInputChange(event.target.value, ["contact", "name_child"])
                    }
                  />
                } />
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
              value={contact.name_child}
              onChange={event =>
                onInputChange(event.target.value, ["contact", "name_child"])
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
              value={contact.name_child}
              onChange={event =>
                onInputChange(event.target.value, ["contact", "name_child"])
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
                value={null}
                onChange={console.log}
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
              label="Telefoonnummer"
              type="number"
              InputProps={{
                startAdornment: <InputAdornment position="end"><PhoneIcon/></InputAdornment>
              }}
              value={contact.name_child}
              onChange={event =>
                onInputChange(event.target.value, ["contact", "name_child"])
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
                label="Ik machtig Junior Joy om een eenmalige vergoeding van € 79 van mijn bankrekening te innen."
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
