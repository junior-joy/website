import React, { Component } from "react";
import PropTypes from "prop-types";
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import ScheduleSelector from './ScheduleSelector'
import nlLocale from 'date-fns/locale/nl'

class ContactInfo extends Component {

  render() {
    const { schedule, extra, color, packageChoice, onInputChange, setFormState } = this.props;
    const labelGrouptrainging = (color.verbose==='rood') ? 'groepstraining rood - 12 weken - €115' : 'groepstraining - 12 weken - €180'
    return (
      <div className="page">
        <fieldset id="contact" className="fieldset fieldset--contact">
          {(packageChoice === 'extra') && (
            <div className="columns">
              <div className="column is-12">
                <div className="page__header">
                  <div className="page__header__container">
                    <h1 className="page__title">Selecteer uw uitbreidingen</h1>
                  </div>
                </div>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox checked={extra.group} onChange={event => onInputChange(event.target.checked, ["extra", "group"])} />
                    }
                    label={labelGrouptrainging}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox checked={extra.prive} onChange={event => onInputChange(event.target.checked, ["extra", "prive"])}  />
                    }
                    label="priveles - 12 weken - €640"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox checked={extra.prive5} onChange={event => onInputChange(event.target.checked, ["extra", "prive5"])}  />
                    }
                    label="priveles strippenkaart - 5 keer - €275"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox checked={extra.prive1} onChange={event => onInputChange(event.target.checked, ["extra", "prive1"])}  />
                    }
                    label="priveles - 1 keer - €60"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox checked={extra.duo} onChange={event => onInputChange(event.target.checked, ["extra", "duo"])}  />
                    }
                    label="Duo training - 12 weken - €320"
                  />
                </FormGroup>
              </div>
            </div>
          )}
          <div className="page__header">
            <div className="page__header__container">
              <h1 className="page__title">Wanneer is uw kind beschikbaar?</h1>
            </div>
          </div>
        <div className="columns">
          <div className="column is-12">
            <FormLabel component="legend">Om ons lesprogramma zo goed mogelijk in te delen, zouden wij graag willen weten op welke dagen uw kind beschikbaar is. </FormLabel><br />
            <ScheduleSelector
              dateFormat={ { format: 'dddd', options: { locale: nlLocale } } }
              selection={schedule}
              startDate={new Date('2018-01-01')}
              numDays={7}
              minTime={8}
              maxTime={22}
              onChange={event =>
                onInputChange(event, ["schedule"])
              }
            />
          </div>
        </div>
          <Button onClick={() => setFormState({ stage: 0 })} variant="contained" color="primary" className="btn">
            Terug
          </Button>
          <Button onClick={() => setFormState({ stage: 2 })} variant="contained" color="primary" className="btn is-pulled-right">
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
