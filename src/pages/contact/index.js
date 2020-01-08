import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'
import Maps from '../../components/Maps'
import { Link } from 'gatsby'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
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
    return (
      <Layout
        onSwipedLeft={() => navigate( '/photos' )}
        onSwipedRight={() => navigate( '/blog' )}
      >
        <section className="section">
          <div className="container-fluid">
            <div className="columns">
              <div className="column is-6">
                <div className="content">
                  <h1>Contact</h1>
                  <p>Heb je een vraag over Junior Joy? Vul onderstaand formulier in en we reageren zo snel mogelijk.</p>
                  <form
                    name="contact"
                    method="post"
                    action="/contact/thanks/"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={this.handleSubmit}
                  >
                    {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                    <input type="hidden" name="form-name" value="contact" />
                    <div hidden>
                      <label>
                        Don’t fill this out:{' '}
                        <input name="bot-field" onChange={this.handleChange} />
                      </label>
                    </div>
                    <div className="field">
                      <label className="label" htmlFor={'name'}>
                        Jouw naam
                      </label>
                      <div className="control">
                        <input
                          className="input"
                          type={'text'}
                          name={'name'}
                          onChange={this.handleChange}
                          id={'name'}
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
                          className="input"
                          type={'email'}
                          name={'email'}
                          onChange={this.handleChange}
                          id={'email'}
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
                          className="textarea"
                          name={'message'}
                          onChange={this.handleChange}
                          id={'message'}
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
                  <img src="https://res.cloudinary.com/junior-joy/image/upload/v1577894223/teun_ffehbw.png" title="Teun Kuijken " style={{ marginBottom: '0.5rem' }} />
                  <ul>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <p>
                        Junior Joy is het jeugdprogramma van Joy Jaagpad tennis. Voor meer informatie over de trainers, het initiatief en de organisatie vindt u hier de contactgegevens.
                      </p>
                    </li>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <p>
                        <FaArrowRight style={{ position: 'relative', top: '0.16rem' }}/> info@juniorjoy.nl
                      </p>
                    </li>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <p>
                        <FaArrowRight style={{ position: 'relative', top: '0.16rem' }} /> (+31) 6 47392537
                      </p>
                    </li>
                    <li >
                      <p>
                        <FaArrowRight style={{ position: 'relative', top: '0.16rem' }} />ALTC Joy Jaagpad<br />
                        <span style={{marginLeft:'1rem'}} />Jaagpad 48<br />
                        <span style={{marginLeft:'1rem'}} />1059 BP Amsterdam<br />
                      </p>
                    </li>
                  </ul>
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
          <div style={{ width: '100vw', height: '30vw', minHeight: '200px', left: '-1.5rem', position: 'relative', top: '3rem' }}>
            <Maps />
          </div>
        </section>
      </Layout>
    )
  }
}
