import React from 'react'
import { navigate } from 'gatsby'
import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout
        onSwipedLeft={() => navigate( '/contact' )}
        onSwipedRight={() => navigate( '/about' )}
      >
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `linear-gradient(
                  rgba(1, 19, 17, 0.7),
                  rgba(2, 38, 34, 0.7)
                ), url('/img/blog-index.jpg')`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              color: 'white',
              padding: '1rem',
            }}
          >
            Het blog van Teun
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <BlogRoll />
          </div>
        </section>
      </Layout>
    )
  }
}
