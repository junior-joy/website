import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/junior-joy-wit.png'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-primary has-text-white-ter">
        <div className="content has-text-centered">
          <div style={{ width: '14em', position: 'relative', marginLeft: 'auto', marginRight: 'auto' }} >
            <img
              src={logo}
              alt="Junior Joy"
              style={{ width: '100%' }}
            />
          </div>
        </div>
        <div className="content has-text-centered has-background-primary has-text-white-ter">
          <div className="container has-background-primary has-text-white-ter" style={{ maxWidth: '100%' }}>
            <div className="columns border-bottom">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/privacy" className="navbar-item">
                        Privacy
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/voorwaarden">
                        Voorwaarden
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>
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
        </div>
      </footer>
    )
  }
}

export default Footer
