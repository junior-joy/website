import React from 'react'
import { navigate } from 'gatsby-link'
import { Swipeable } from 'react-swipeable'
import Layout from '../../components/Layout'

export default () => (
  <Layout>
    <Swipeable
      onSwipedLeft={() => navigate( '/photobook' )}
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
    </Swipeable>
  </Layout>
)
