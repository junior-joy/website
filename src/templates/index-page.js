import React from 'react'
import PropTypes from 'prop-types'
import { Link, navigate, graphql } from 'gatsby'
import Content, { HTMLContent } from '../components/Content'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'
import Contact from '../components/Contact'

export const IndexPageTemplate = ({
  image,
  title,
  subheading,
  content,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content
  const imgUrl = !!( image && image.childImageSharp ) ? image.childImageSharp.fluid.src : image
  return (
  <>
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
            background: 'center',
            backgroundSize: 'cover',
            backgroundPositionX: 'center',
            backgroundRepeatX: 'no-repeat',
            backgroundImage: `url(${
              imgUrl.split('upload/').join('upload/t_media_lib_thumb/')
            })`,
            position: 'absolute',
            width: '100%',
            zIndex: '-1'
          }}
        />
        <div
          style={{
            display: 'flex',
            height: '100%',
            lineHeight: '1',
            justifyContent: 'space-around',
            alignItems: 'left',
            flexDirection: 'column',
            background: 'center',
            backgroundSize: 'cover',
            backgroundPositionX: 'center',
            backgroundRepeatX: 'no-repeat',
            backgroundImage: `linear-gradient(
          rgba(1, 19, 17, 0.7),
          rgba(2, 38, 34, 0.7)
        ), url(${
              imgUrl
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
        <div className="titles">
          <h1
            className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
            style={{
              color: 'white',
              padding: '0.25em',
              lineHeight: '1',
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
                <Contact />
                <PageContent className="content" content={content} />
                <div className="content">
                  <div>
                    <h3 className="has-text-weight-semibold is-size-2">
                      Laatste nieuws
                    </h3>
                    <BlogRoll newsFeed={true} count={4} />
                    <div className="column is-12 has-text-centered" style={{ marginBottom:'1em' }}>
                      <Link className="more" to="/blog">
                        Naar blog →
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
    <div style={{ height: 'calc(300px + 5vw)'}} className="has-background-primary" />
    <div className="asterisk content" style={{ display: 'none', height: '0' }}><blockquote /></div>
  </>
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
    <Layout
      onSwipedLeft={() => navigate( '/trainers' )}
      onSwipedRight={() => navigate( '/photos' )}
      phoneTitle={'Home'}
    >
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
        image
        subheading
      }
    }
  }
`
