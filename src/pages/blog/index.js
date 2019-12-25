import React from 'react'
import { navigate } from 'gatsby'
import { Swipeable } from 'react-swipeable'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Swipeable
          onSwipedLeft={() => navigate( '/contact' )}
          onSwipedRight={() => navigate( '/about' )}
        >
          <div
            className="full-width-image-container margin-top-0"
            style={{
              backgroundImage: `url('/img/blog-index.jpg')`,
            }}
          >
            <h1
              className="has-text-weight-bold is-size-1 shadow"
              style={{
                color: 'white',
                padding: '1rem',
              }}
            >
              Junior Joy by Inspire
            </h1>
          </div>
          <section className="section">
            <div className="container">
                    <BlogRoll />
            </div>
          </section>
        </Swipeable>
      </Layout>
    )
  }
}
