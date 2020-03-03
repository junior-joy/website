import React from 'react'
import PropTypes from 'prop-types'
import { navigate } from 'gatsby-link'
import ContactForm from '../components/contact/App'

import Layout from '../components/Layout'
import Maps from '../components/Maps'
import {  graphql } from 'gatsby'
import Content, { HTMLContent } from '../components/Content'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export class ContactPageTemplate extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render() {
    const PageContent = this.props.contentComponent || Content
    const { left, content } = this.props
    return (
        <section className="section">
          <div className="container-fluid">
            <div className="columns">
              <div className="column is-6">
                <PageContent className="content" content={left} />
                <div className="content">
                  <ContactForm />
                </div>
              </div>
              <div className="column is-6">
                <section>
                  <PageContent className="content" content={content} />
                </section>
              </div>
              <div className="column is-4">
                {/*
                <a title="facebook" href="https://facebook.com">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="twitter" href="https://twitter.com">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a rel="noreferrer" title="instagram" target="_blank" href="https://www.instagram.com/inspiretoptennisamsterdam/">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ height: '2em', marginTop: '1em', filter: 'invert(100%)' }}
                  />
                  <p
                    style={{ color: 'white' }}
                  > Instagram
                  </p>
                </a>
                */}
                {/*
                <a title="vimeo" href="https://vimeo.com">
                  <img
                    src={vimeo}
                    alt="Vimeo"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                */}
              </div>
            </div>
          </div>
          <div style={{ width: '100vw', height: '30vw', minHeight: '200px', left: '-1.5rem', position: 'relative', top: '3rem', zIndex: '0' }}>
            <Maps />
          </div>
        </section>
    )
  }
}

ContactPageTemplate.propTypes = {
  content: PropTypes.string,
  left: PropTypes.string,
  contentComponent: PropTypes.func,
}

const ContactPage = ({ data }) => {
  const { html, fields } = data.markdownRemark
  const left = fields.left_html

  return (
    <Layout
      onSwipedLeft={() => navigate( '/photos' )}
      onSwipedRight={() => navigate( '/blog' )}
      phoneTitle={'Contact'}
    >
    <ContactPageTemplate
      contentComponent={HTMLContent}
      content={html}
      left={left}
    />
  </Layout>
  )
}

ContactPage.propTypes = {
  data: PropTypes.object,
}

export default ContactPage


export const ContactPageQuery = graphql`
  query ContactPage {
    markdownRemark(frontmatter: { templateKey: { eq: "contact-page" } }) {
      html
      fields {
        left_html
      }
    }
  }
`
