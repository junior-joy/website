import React, { Component } from "react";
import PropTypes from "prop-types";
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

class ContactInfo extends Component {

  render() {
    const { contact, onInputChange, handleSubmit } = this.props;
    return (
      <div>
        <div className="page__header">
          <div className="page__header__container">
            <h1 className="page__title">Hoe kunnen we u bereiken?</h1>
          </div>
        </div>
        <fieldset id="contact" className="fieldset fieldset--contact">
        <FormLabel component="legend">Bedankt voor het invullen. Wij versturen u een persoonlijke deal in uw omgeving. </FormLabel>
        <div className="columns">
          <div className="column is-12">
            <TextField
              fullWidth
              variant="outlined"
              name="email"
              autoComplete="email"
              label="Email*"
              type="email"
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
              label="IBAN"
              variant="outlined"
              type="text"
              autoComplete="name"
              value={contact.name}
              onChange={event =>
                onInputChange(event.target.value, ["contact", "name"])
              }
            />
          </div>
        </div>
        <div className="columns">
          <div className="column is-12">
            <TextField
              fullWidth
              label="Naam op kaart"
              variant="outlined"
              type="text"
              autoComplete="name"
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
                  <Checkbox checked={true} onChange={event => onInputChange(event.target.checked, ["device", "washer"])} value={false} />
                }
                label="Ik machtig Junior Joy om een eenmalige vergoeding van € 79 van mijn bankrekening te innen."
              />
            </FormGroup>
          </div>
        </div>
          <Button onClick={handleSubmit} variant="contained" color="primary" className="btn is-pulled-right">
            Ontvang deal
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
};

export default ContactInfo;
