import React, { Component } from "react";
import PropTypes from "prop-types";



class Thanks extends Component {
  render() {
    const { contact } = this.props;
    return (
      <div>
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <div className="content">
                <h3>Bedankt voor het inschrijven,<br /><br />
                  Je ontvangt een bevestiging op { contact.email }
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}



Thanks.propTypes = {
  contact: PropTypes.object,
};



export default Thanks;
