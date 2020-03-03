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
                <h4>Bedankt {contact.name},<br /><br /></h4>
                  <h5>
                  Wij reageren bijna altijd binnen twee dagen.<br /><br />
                   - Junior Joy
                </h5>
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
