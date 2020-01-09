import React from 'react'
import { Link } from 'gatsby'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import logo from '../img/logo.webp'

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
    const { onSwipedLeft, onSwipedRight, phoneTitle } = this.props
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Junior Joy" />
            </Link>
            {onSwipedRight && (
              <div onClick={onSwipedRight} className="navbar-item arrow" title="Left">
                <FaArrowLeft />
              </div>
            )}
            <div className="navbar-item right arrow" title="Left">
              <h2>{phoneTitle}</h2>
            </div>
            {onSwipedLeft ? (
              <div onClick={onSwipedLeft} className="navbar-item right arrow" title="Right">
                <FaArrowRight />
              </div>
            ) : <div className="right" />}
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
              <Link className="navbar-item" to="/about" activeClassName="is-active" partiallyActive={true}>
                Info
              </Link>
              <Link className="navbar-item" to="/blog" activeClassName="is-active" partiallyActive={true}>
                Blog
              </Link>
              <Link className="navbar-item" to="/contact" activeClassName="is-active" partiallyActive={true}>
                Contact
              </Link>
              <Link className="navbar-item" to="/photos" activeClassName="is-active" partiallyActive={true}>
                Impressie
              </Link>
            </div>
            <div className="navbar-end has-text-centered" activeClassName="is-active" partiallyActive={true}>
              {' '}
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
