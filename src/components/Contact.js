import React, { Component } from "react";
import axios from 'axios';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Button from '@material-ui/core/Button';

class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      submitted: false,
      success: null,
    }
    this.handleSubmit = this.handleSubmit.bind( this )
  }

  handleSubmit( event ) {
    event.preventDefault();
    const { first_name, last_name, email } = this.state
    const data = {
      email: email,
      first_name: first_name,
      last_name: last_name,
    }
    axios.post(`https://api.plathena.com/plathena/mail/subscribe/inspire/junior-joy/`, data, )
      .then(res => {
        this.setState({
          submitted: true,
          success: true,
        })
      })
      .catch( err => {
        this.setState({
          submitted: true,
          success: false,
        })
      })
  }

  render() {
    const { first_name, last_name, email, submitted, success } = this.state;
    return (
      <div>
        <style>{'.unsubmitted .MuiFormHelperText-root.Mui-error{ display: none; } .unsubmitted .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline{ color: #3f51b5!important; border-color: #3f51b5!important; } .unsubmitted .MuiFormLabel-root.Mui-error{ color: #3f51b5!important }'}</style>
        <div className="">
          <div className="">
            <h1 className="page__title">Blijf op de hoogte. Meld je aan voor de nieuwsbrief.</h1>
            <h3 style={{ marginTop: '1rem', textAlign: 'center' }}>Activiteiten, aankondigingen, leuke tennisinfo, nuttige informatie.</h3>
          </div>
        </div>
        <ValidatorForm
          ref="form"
          onSubmit={this.handleSubmit}
        >
          <fieldset id="contact" className={`fieldset fieldset--contact ${ submitted ? '' : 'unsubmitted' }`}>
            <ul className="ol ol--applicant">
              <li>
                <div className="columns">
                  <div className="column is-12">
                    <TextValidator
                      fullWidth
                      label="Voornaam"
                      variant="outlined"
                      type="text"
                      autoComplete="name"
                      validators={['required']}
                      errorMessages={['Dit veld is verplicht']}
                      value={first_name}
                      onChange={event => this.setState({ first_name: event.target.value })}
                    />
                  </div>
                </div>
              </li>
              <li>
                <div className="columns">
                  <div className="column is-12">
                    <TextValidator
                      fullWidth
                      label="Achternaam"
                      variant="outlined"
                      type="text"
                      autoComplete="name"
                      validators={['required']}
                      errorMessages={['Dit veld is verplicht']}
                      value={last_name}
                      onChange={event => this.setState({ last_name: event.target.value })}
                    />
                  </div>
                </div>
              </li>
              <li>
                <div className="columns">
                  <div className="column is-12">
                    <TextValidator
                      fullWidth
                      label="Email"
                      variant="outlined"
                      type="text"
                      autoComplete="email"
                      validators={['required', 'isEmail']}
                      errorMessages={['Dit veld is verplicht', 'email is niet geldig']}
                      value={email}
                      onChange={event => this.setState({ email: event.target.value })}
                    />
                  </div>
                </div>
              </li>
            </ul>
            { submitted && success && (
              <p>Bedankt {first_name}. Binnenkort ontvang je de eerste nieuwsbrief.</p>
            )}
            <Button onClick={() => this.setState({ submitted: true })} type="submit" variant="contained" color="primary" className="btn is-pulled-right">
              Aanmelden
            </Button>
          </fieldset>
        </ValidatorForm>
      </div>
    );
  }
}


export default Contact;
