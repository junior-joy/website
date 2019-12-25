import React from 'react'
import { Link } from 'gatsby'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <a href="/" className="navbar-item" title="Logo">
              <img src={'https://festive-euler-6ecc62.netlify.com/junior-joy/logo.webp'} alt="Junior Joy" />
            </a>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <a className="navbar-item" href="/about">
                Info
              </a>
              <a className="navbar-item" href="/blog">
                Blog
              </a>
              <a className="navbar-item" href="/contact">
                Contact
              </a>
              <a className="navbar-item" href="/photobook">
                Impressie
              </a>
            </div>
            <div className="navbar-end has-text-centered">
              {' '}
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar