import React, { Component } from "react";
import PropTypes from "prop-types";
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

class ContactInfo extends Component {

  render() {
    const { people, start, onAddSection, toggleHeader, contact, onInputChange } = this.props;
    return (
      <div>
        <div className="page__header">
          <div className="page__header__container">
            <h1 className="page__title">Hoe kunnen we u bereiken?</h1>
            <p className="page__subtitle">
              Vul uw gegevens in en ontvang direct een kortingscode.
            </p>
            <button className="btn--header" onClick={toggleHeader}>
              <span />
            </button>
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
              label="Naam en achternaam"
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
          <div className="column is-6">
            <TextField
              fullWidth
              variant="outlined"
              autoComplete="postal-code"
              label="Postcode*"
              type="email"
              value={start.postcode}
              onChange={event =>
                onInputChange(event.target.value, ["start", "postcode"])
              }
            />
          </div>
          <div className="column is-6">
            <TextField
              fullWidth
              variant="outlined"
              label="Huisnummer*"
              type="email"
              value={contact.housenum}
              onChange={event =>
                onInputChange(event.target.value, ["contact", "housenum"])
              }
            />
          </div>
        </div>
        <div className="columns">
          <div className="column is-12">
            <TextField
              fullWidth
              variant="outlined"
              autoComplete="street-addres"
              label="Straat*"
              type="email"
              value={contact.streetname}
              onChange={event =>
                onInputChange(event.target.value, ["contact", "streetname"])
              }
            />
          </div>
        </div>
        <div className="columns">
          <div className="column is-12">
            <TextField
              fullWidth
              variant="outlined"
              name="email"
              autoComplete="address-line1"
              label="Plaatsnaam*"
              type="email"
              value={contact.city}
              onChange={event =>
                onInputChange(event.target.value, ["contact", "city"])
              }
            />
          </div>
        </div>
          <Button onClick={this.props.next} variant="contained" color="primary" className="btn is-pulled-right">
            Ontvang deal
          </Button>
        </fieldset>
      </div>
    );
  }
}

ContactInfo.propTypes = {
  next: PropTypes.func,
  prev: PropTypes.func,
  people: PropTypes.array,
  onInputChange: PropTypes.func,
  onAddSection: PropTypes.func,
  onRemoveSection: PropTypes.func,
  toggleHeader: PropTypes.func
};

export default ContactInfo;
