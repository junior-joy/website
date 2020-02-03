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

import ScheduleSelector from 'react-schedule-selector'


class ContactInfo extends Component {

  render() {
    const { schedule, contact, onInputChange, handleSubmit } = this.props;
    return (
      <div>
        <div className="page__header">
          <div className="page__header__container">
            <h1 className="page__title">Wanneer is uw kind beschikbaar?</h1>
          </div>
        </div>
        <fieldset id="contact" className="fieldset fieldset--contact">
        <FormLabel component="legend">Bedankt voor het inschrijven. Om ons lesprogramma zo goed mogelijk in te delen, zouden wij graag willen weten op welke dagen uw kind beschikbaar is. </FormLabel>
        <div className="columns">
          <div className="column is-12">
            <ScheduleSelector
              dateFormat="dddd"
              selection={schedule}
              numDays={5}
              minTime={8}
              maxTime={22}
              onChange={event =>
                onInputChange(event, ["schedule"])
              }
            />
          </div>
        </div>
        <div className="columns">
          <div className="column is-12">
          <FormGroup>
            <FormLabel component="legend">Geef aan of u geinteresseerd bent in extra trainingen</FormLabel>
            <FormControlLabel
              control={
                <Checkbox checked={true} onChange={event => onInputChange(event.target.checked, ["device", "washer"])} />
              }
              label="Extra training"
            />
            <FormControlLabel
              control={
                <Checkbox checked={false} onChange={event => onInputChange(event.target.checked, ["device", "dryer"])}  />
              }
              label="Duo training"
            />
            <FormControlLabel
              control={
                <Checkbox checked={false} onChange={event => onInputChange(event.target.checked, ["device", "dryer"])}  />
              }
              label="Prive wekelijks"
            />
            <FormControlLabel
              control={
                <Checkbox checked={false} onChange={event => onInputChange(event.target.checked, ["device", "dryer"])}  />
              }
              label="Prive strippenkaart"
            />
            <FormControlLabel
              control={
                <Checkbox checked={false} onChange={event => onInputChange(event.target.checked, ["device", "dryer"])}  />
              }
              label="Nee, geen extra training"
            />
            {/*
            <FormControlLabel
              control={
                <Checkbox checked={dishwasher} onChange={event => onInputChange(event.target.checked, ["device", "dishwasher"])} value={false} />
              }
              label="Vaatwasser"
            />
            <FormControlLabel
              control={
                <Checkbox checked={fridge} onChange={event => onInputChange(event.target.checked, ["device", "fridge"])} value={false} />
              }
              label="Koelkast"
            />
            */}
          </FormGroup>
          </div>
        </div>
          <Button onClick={() => {}} variant="contained" color="primary" className="btn is-pulled-right">
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
  handleSubmit: PropTypes.func,
};

export default ContactInfo;
