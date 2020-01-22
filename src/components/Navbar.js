import React from 'react'
import { Link } from 'gatsby'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import logo from '../img/logo.webp'

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

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
              <ExpansionPanel className="navbar-item nav-drop-root" style={{ maxHeight: '80px' }}>
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography >Over ons</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className="nav-drop" style={{ padding: '0' }}>
                  <List style={{ width: '100%' }}>
                    <li>
                      <Link className="navbar-item" to="/trainers" activeClassName="is-active" partiallyActive={true}>
                        De trainers
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/werkwijze" activeClassName="is-active" partiallyActive={true}>
                        Werkwijze
                      </Link>
                    </li>
                  </List>
                </ExpansionPanelDetails>
              </ExpansionPanel>
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
