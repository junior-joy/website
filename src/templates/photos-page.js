import React from 'react'
import PropTypes from 'prop-types'
import { graphql, navigate } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Gallery from 'react-grid-gallery';

export const AboutPageTemplate = ({ edges, contentComponent }) => {
  const PageContent = contentComponent || Content
  const images = edges.map( edge => {
    const thumbnail = edge.node.secure_url.split('upload/').join('upload/t_media_lib_thumb/')
    return ({
      src: edge.node.secure_url,
      thumbnail: thumbnail,
    })
  })

  return (
    <section className="section section--gradient">
      <div className="container">
        <Gallery images={images} rowHeight={60} id="gallery"/>
      </div>
    </section>
  )
}

AboutPageTemplate.propTypes = {
  edges: PropTypes.object.isRequired,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { allCloudinaryMedia: { edges: edges } } = data
  return (
    <Layout
      onSwipedLeft={() => navigate( '/' )}
      onSwipedRight={() => navigate( '/contact' )}
    >
      <AboutPageTemplate
        contentComponent={HTMLContent}
        edges={edges}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage{
    allCloudinaryMedia(filter: {secure_url: {regex: "/impressie/"}}) {
      edges {
        node {
          secure_url
        }
      }
    }
  }
`
