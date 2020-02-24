import React from 'react'
import PropTypes from 'prop-types'
import { navigate, graphql, Link } from 'gatsby'
import Img from "gatsby-image"
import Layout from '../../../components/Layout'
import Form from '../../../components/form/App'

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
    const { headerBackground } = this.props.data
    return (
      <Layout
        onSwipedLeft={() => navigate( '/tags/8-hours' )}
        onSwipedRight={() => navigate( '/' )}
        phoneTitle={'Contact'}
      >
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `linear-gradient(
              rgba(23, 77, 59, 0.7),
              rgba(20, 66, 50, 0.7)
            )`,
          }}
        >{headerBackground && (
          <Img
            fluid={headerBackground.fluid}
            style={{
              zIndex: '-1',
              position: 'static'
            }}
          />

        )}
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              color: 'white',
              padding: '1rem',
            }}
          >
            Inschrijven Groen
          </h1>
        </div>
        <section className="section--gradient">
          <Form color={{ code: "#57CCA4", verbose: 'groen' }} />
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">
                <Link to="/training/categorieen">→ Lees meer over de kleuren</Link><br />
                <Link to="/training/aanbod">→ Lees meer over ons aanbod</Link><br />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}



Index.propTypes = {
  data: PropTypes.shape({
    headerBackground: PropTypes.object,
  }),
}



export const pageQuery = graphql`
  query GroenPageQuery {
    headerBackground: imageSharp(fluid: { originalName: { regex: "/IMG_7641_suey6h/" } }) {
      fluid(maxWidth: 2400, maxHeight: 1200) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
