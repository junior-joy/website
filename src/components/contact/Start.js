import React, { Component } from "react";
import PropTypes from "prop-types";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

class Start extends Component {
  render() {
    const { contact, onInputChange } = this.props;
    return (
      <div>
        <fieldset id="contact" className="">
          <ul className="ol ol--applicant"
            style={{
              padding: "0",
              margin: "0",
              listStyle: "none",
            }}
          >
            <li>
              <div className="columns">
                <div className="column is-12">
                  <TextField
                    fullWidth
                    label="Naam"
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
            </li>
            <li>
              <div className="columns">
                <div className="column is-12">
                  <TextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    type="text"
                    autoComplete="email"
                    value={contact.email}
                    onChange={event =>
                      onInputChange(event.target.value, ["contact", "email"])
                    }
                  />
                </div>
              </div>
            </li>
            <li>
              <div className="columns">
                <div className="column is-12">
                  <FormControl component="fieldset">
                     <FormLabel component="legend">Ik heb een vraag over</FormLabel>
                     <RadioGroup
                      aria-label="topic"
                      name="topic"
                      value={contact.topic}
                      onChange={event =>
                        onInputChange(event.target.value, ["contact", "topic"])
                      }
                    >
                       <FormControlLabel value="inschrijving" control={<Radio />} label="Inschrijving" />
                       <FormControlLabel value="trainingsprogramma" control={<Radio />} label="Trainingen" />
                       <FormControlLabel value="anders" control={<Radio />} label="Anders" />
                     </RadioGroup>
                   </FormControl>
                </div>
              </div>
            </li>
            <li>
              <div className="columns">
                <div className="column is-12">
                  <TextField
                    fullWidth
                    multiline={true}
                    rows={6}
                    rowsMax={32}
                    label="Vraag"
                    variant="outlined"
                    type="text"
                    value={contact.message}
                    onChange={event =>
                      onInputChange(event.target.value, ["contact", "message"])
                    }
                  />
                </div>
              </div>
            </li>
          </ul>
          <Button onClick={this.props.handleSubmit} variant="contained" color="primary" className="btn is-pulled-right">
            Verstuur
          </Button>
        </fieldset>
      </div>
    );
  }
}

Start.propTypes = {
  contact: PropTypes.object,
  onInputChange: PropTypes.func,
  onRemoveSection: PropTypes.func,
};

export default Start;
