import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'

export default () => {
  const navigateToPhotobook = () => {
    if (typeof window !== 'undefined') {
      window.location.assign('/photobook')
    }
  }
  return (
  <Layout
    onSwipedLeft={navigateToPhotobook}
    onSwipedRight={() => navigate( '/blog' )}
  >
    <section className="section">
      <div className="container">
        <div className="content">
          <h1>Bedankt!</h1>
          <p></p>
        </div>
      </div>
    </section>
  </Layout>
)}
