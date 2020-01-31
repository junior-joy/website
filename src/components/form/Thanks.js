import React, { Component } from "react";
import PropTypes from "prop-types";



class Thanks extends Component {
  render() {
    const { contact } = this.props;
    return (
      <div>
        <div className="page__header">
          <div className="page__header__container">
            <h1 className="page__title">Ask me anything! I always respond quickly</h1>
          </div>
        </div>
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <div className="content">
                <h3>Thank you {contact.name},<br /><br />
                  I'll make sure to get back to you soon.<br /><br />
                   - Norwin
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
