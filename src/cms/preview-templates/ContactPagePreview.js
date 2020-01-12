import React from 'react'
import PropTypes from 'prop-types'
import { ContactPageTemplate } from '../../templates/contact-page'

const ContactPagePreview = ({ widgetFor }) => {
  return (
    <ContactPageTemplate
      content={widgetFor('body')}
    />
  )
}

ContactPagePreview.propTypes = {
  widgetFor: PropTypes.func,
}

export default ContactPagePreview
