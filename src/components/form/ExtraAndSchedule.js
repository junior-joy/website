import React, { Component } from "react";
import PropTypes from "prop-types";
import { extras } from './App'
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import ScheduleSelector from './ScheduleSelector'
import nlLocale from 'date-fns-legacy/locale/nl'



class ContactInfo extends Component {
  constructor( props ) {
    super( props )
    this.state = { error: false }
    this.next = this.next.bind( this )
  }

  next() {
    const { schedule, setFormState } = this.props
    const con = document.querySelector('.parralax')
    con.scrollTop = 0
    if ( schedule.length <= 3 ) {
      this.setState({ error: true })
    } else {
      setFormState({ stage: 2 })
    }
  }

  render() {
    const { schedule, extra, color, packageChoice, onInputChange, setFormState } = this.props;
    const { error } = this.state
    const labelExtraGrouptraining = (color.verbose==='rood') ? 'groepstraining rood - 12 weken - €115' : 'groepstraining - 12 weken - €180'
    return (
      <div className="page">
        <fieldset id="contact" className="fieldset fieldset--contact">
          {(packageChoice === 'extra') && (
            <div className="columns">
              <div className="column is-12">
                <div className="page__header">
                  <div className="page__header__container">
                    <h1 className="page__title">Selecteer jouw uitbreiding</h1>
                    <p>Breid jouw basispakket uit door hieronder jouw keuze aan te vinken.</p>
                  </div>
                </div>
                <FormGroup>
                  {extras(color).map( item => (!(color.verbose==='rood' && item.value.includes('prive')) &&
                    <FormControlLabel
                      control={
                        <Checkbox checked={extra[item.value]} onChange={event => onInputChange(event.target.checked, ["extra", item.value])} />
                      }
                      label={ item.label + ' - €' + item.price }
                    />
                  ))}
                </FormGroup>
              </div>
            </div>
          )}
          <div className="page__header">
            <div className="page__header__container">
              <h2 className="page__title">Selecteer de uren waarop jouw kind beschikbaar is</h2>
              <p>Geef voldoende beschikbaarheid op zodat er genoeg speling voor ons is om jou in een passende groep te plaatsen.</p>
            </div>
          </div>
          <ScheduleSelector
            dateFormat={ { format: 'dd', options: { locale: nlLocale } } }
            selection={schedule}
            startDate={new Date('2018-01-01')}
            numDays={7}
            minTime={9}
            maxTime={20}
            onChange={event =>
              onInputChange(event, ["schedule"])
            }
          />
          <br />
          {error && <p style={{ color: '#f44336', float: 'right', }}>Vul minstens vier tijdsvakken in</p> }
          <br />
          <Button onClick={() => setFormState({ stage: 0 })} variant="contained" color="primary" className="btn">
            Terug
          </Button>
          <Button onClick={this.next} variant="contained" color="primary" className="btn is-pulled-right">
            Volgende
          </Button>
        </fieldset>
      </div>
    );
  }
}

ContactInfo.propTypes = {
  onInputChange: PropTypes.func,
  toggleHeader: PropTypes.func,
  setFormState: PropTypes.func,
  packageChoice: PropTypes.bool,
  extra: PropTypes.object.isRequired,
};

export default ContactInfo;
