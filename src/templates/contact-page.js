import React from 'react'
import PropTypes from 'prop-types'
import { navigate } from 'gatsby-link'
import Layout from '../components/Layout'
import Maps from '../components/Maps'
import { Link, graphql } from 'gatsby'
import Content, { HTMLContent } from '../components/Content'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

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
    const content = this.props.content
    return (
        <section className="section">
          <div className="container-fluid">
            <div className="columns">
              <div className="column is-6">
                <div className="content">
                  <h1>Contact</h1>
                  <p>Heb je een vraag over Junior Joy? Vul onderstaand formulier in en we reageren zo snel mogelijk.</p>
                  <form action="https://juniorjoy.us4.list-manage.com/subscribe/post?u=2b4f240fe10a82bc83cdad4f6&amp;id=1bd5b4f914" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                    {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                    <input type="hidden" name="form-name" value="contact" />
                    <div hidden>
                      <label>
                        Dit niet invullen:{' '}
                        <input name="bot-field" onChange={this.handleChange} />
                      </label>
                    </div>
                    <div className="field">
                      <label className="label" htmlFor={'name'}>
                        Jouw naam
                      </label>
                      <div className="control">
                    	  <input
                          type="text"
                          value=""
                          name="FNAME"
                          className="input"
                          id="mce-FNAME"
                          required={true}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label className="label" htmlFor={'email'}>
                        Email
                      </label>
                      <div className="control">
                      	<input
                          type="email"
                          value=""
                          name="EMAIL"
                          className="input"
                          id="mce-EMAIL"
                          required={true}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label className="label" htmlFor={'message'}>
                        Bericht
                      </label>
                      <div className="control">
                        <textarea
                          type="text"
                          value=""
                          name="MMERGE6"
                          id="mce-MMERGE6"
                          className="textarea"
                          required={true}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <button className="button" type="submit">
                        Verstuur
                      </button>
                    </div>
                  </form>
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
  contentComponent: PropTypes.func,
}

const ContactPage = ({ data }) => {
  const { html } = data.markdownRemark

  return (
    <Layout
      onSwipedLeft={() => navigate( '/photos' )}
      onSwipedRight={() => navigate( '/blog' )}
      phoneTitle={'Contact'}
    >
    <ContactPageTemplate
      contentComponent={HTMLContent}
      content={html}
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
    }
  }
`
