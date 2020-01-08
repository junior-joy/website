import React from 'react'
import PropTypes from 'prop-types'
import { graphql, navigate } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const PhotosPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="page">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">
                <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                  {title}
                </h2>
                <PageContent className="content" content={content} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

PhotosPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const PhotosPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout
      onSwipedLeft={() => navigate( '/blog' )}
      onSwipedRight={() => navigate( '/' )}
    >
      <PhotosPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

PhotosPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default PhotosPage

export const PhotosPageQuery = graphql`
  query PhotosPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
