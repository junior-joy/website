import React from 'react'
import PropTypes from 'prop-types'
import { ContactPageTemplate } from '../../templates/contact-page'

const ContactPagePreview = ({ entry, widgetFor }) => {
  return (
    <ContactPageTemplate
      content={widgetFor('body')}
      left={entry.getIn(['data', 'left'])}
    />
  )
}

ContactPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ContactPagePreview
