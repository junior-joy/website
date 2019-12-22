import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Content, { HTMLContent } from '../components/Content'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'

export const IndexPageTemplate = ({
  image,
  title,
  subheading,
  content,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content
  return (
  <div className="">
    <div className="header-wrapper">
    <div
        className="header margin-top-0"
        style={{
          top: '-50vh'
        }}
      >
        <div
          style={{
            display: 'flex',
            height: '100%',
            lineHeight: '1',
            justifyContent: 'space-around',
            alignItems: 'left',
            flexDirection: 'column',
            backgroundImage: `linear-gradient(
          rgba(1, 19, 17, 0.7),
          rgba(2, 38, 34, 0.7)
        ), url(${
              !!( image && image.childImageSharp ) ? image.childImageSharp.fluid.src : 'https://images.unsplash.com/photo-1485908953667-cf6d88997642?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3840&q=80'
            })`,
          }}
        >
        </div>
      </div>
    </div>
    <section className="section section--gradient"
      style={{
        position:'relative',
        top:'30vh',
      }}
    >
      <div className="container is-widescreen">
        <div className="titles shadow">
          <h1
            className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
            style={{
              color: 'white',
              lineHeight: '1',
              padding: '0.25em',
            }}
          >
            {title}
          </h1>
          <h3
            className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
            style={{
              color: 'white',
              lineHeight: '1',
              padding: '0.25em',
            }}
          >
            {subheading}
          </h3>
        </div>
        <div className="page">
          <div className="columns">
            <div className="section">
              <div className="column is-10 is-offset-1">

                <PageContent className="content" content={content} />
                <div className="content">
                  <div>
                    <h3 className="has-text-weight-semibold is-size-2">
                      Laatste nieuws
                    </h3>
                    <BlogRoll />
                    <div className="column is-12 has-text-centered" style={{ marginBottom:'1em' }}>
                      <Link className="btn" to="/blog">
                        Lees meer
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)}

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  subheading: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const IndexPage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        subheading={frontmatter.subheading}
        contentComponent={HTMLContent}
        content={html}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        subheading
      }
    }
  }
`
