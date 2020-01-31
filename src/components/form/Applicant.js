import React, { Component } from "react";
import PropTypes from "prop-types";
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

class Applicant extends Component {
  renderPerson = (person, index) => {
    const { next, prev, onInputChange, onRemoveSection } = this.props;
    return (
      <li key={index}>
        <div className="columns">
          <div className="column is-12">
            <TextField
              id={`name${index > 0 ? `-contact-section-${index}` : ""}`}
              fullWidth
              label="Naam en achternaam"
              variant="outlined"
              type="text"
              autoComplete="name"
              value={person.name}
              onChange={event =>
                onInputChange(event.target.value, ["people", index, "name"])
              }
            />
          </div>
        </div>
        <div className="columns">
          <div className="column is-6">
            <TextField
              id={`email${index > 0 ? `-contact-section-${index}` : ""}`}
              fullWidth
              variant="outlined"
              name="email"
              autoComplete="email"
              label="Email*"
              type="email"
              value={person.email}
              onChange={event =>
                onInputChange(event.target.value, ["people", index, "email"])
              }
            />
          </div>
          <div className="column is-6">
            <TextField
              id={`tel${index > 0 ? `-contact-section-${index}` : ""}`}
              fullWidth
              variant="outlined"
              name="tel"
              autoComplete="home tel"
              label="Telefoon*"
              type="text"
              value={person.phone}
              onChange={event =>
                onInputChange(event.target.value, ["people", index, "phone"])
              }
            />
          </div>
        </div>
        <div className="columns">
          <div className="column is-12">
            <Select
              id={`name${index > 0 ? `-contact-section-${index}` : ""}`}
              helperText="Wij vinden de goedkoopse lease in uw provincie"
              fullWidth
              label="Provincie"
              variant="outlined"
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={person.province || 1}
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
          </div>
        </div>
        {index > 0 ? (
          <button
            id={`remove-contact-section-${index}`}
            className="btn btn--remove"
            onClick={event => onRemoveSection(event, "people", index)}
          >
            <span />
          </button>
        ) : null}
      </li>
    );
  };

  render() {
    const { people, onAddSection, toggleHeader } = this.props;
    return (
      <div>
        <div className="page__header">
          <div className="page__header__container">
            <h1 className="page__title">Krijg 5% korting op uw lease</h1>
            <p className="page__subtitle">
              Wees er snel bij, want de korting is alleen geldig tijdens onze pilotfase. Vul uw gegevens in en ontvang direct een kortingscode.
            </p>
            <button className="btn--header" onClick={toggleHeader}>
              <span />
            </button>
          </div>
        </div>
        <fieldset id="contact" className="fieldset fieldset--contact">
          <ul className="ol ol--applicant">
            {people.map(this.renderPerson)}
          </ul>
          <Button onClick={this.props.next} variant="contained" color="primary" className="btn is-pulled-right">
            Ontvang code
          </Button>
        </fieldset>
      </div>
    );
  }
}

Applicant.propTypes = {
  next: PropTypes.func,
  prev: PropTypes.func,
  people: PropTypes.array,
  onInputChange: PropTypes.func,
  onAddSection: PropTypes.func,
  onRemoveSection: PropTypes.func,
  toggleHeader: PropTypes.func
};

export default Applicant;
