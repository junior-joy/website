import React from 'react'
import PropTypes from 'prop-types'
import { graphql, navigate } from 'gatsby'
import Layout from '../components/Layout'
import { HTMLContent } from '../components/Content'
import Gallery from 'react-grid-gallery';

export const PhotosPageTemplate = ({ edges, contentComponent }) => {
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

PhotosPageTemplate.propTypes = {
  edges: PropTypes.object.isRequired,
  contentComponent: PropTypes.func,
}

const PhotosPage = ({ data }) => {
  const { allCloudinaryMedia: { edges: edges } } = data
  return (
    <Layout
      onSwipedLeft={() => navigate( '/' )}
      onSwipedRight={() => navigate( '/contact' )}
      phoneTitle={'Impressie'}
    >
      <PhotosPageTemplate
        contentComponent={HTMLContent}
        edges={edges}
      />
    </Layout>
  )
}

PhotosPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default PhotosPage

export const PhotosPageQuery = graphql`
  query PhotosPage{
    allCloudinaryMedia(filter: {secure_url: {regex: "/impressie/"}}) {
      edges {
        node {
          secure_url
        }
      }
    }
  }
`
