import React from 'react'
import { navigate } from 'gatsby'
import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout
        onSwipedLeft={() => navigate( '/contact' )}
        onSwipedRight={() => navigate( '/info' )}
        phoneTitle={'Blog'}
      >
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `linear-gradient(
                  rgba(1, 19, 17, 0.7),
                  rgba(2, 38, 34, 0.7)
                ), url('https://res.cloudinary.com/junior-joy/image/upload/v1577885212/website--niet-zomaar-aankomen-teun/blog-index_p8ka4o.jpg')`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              color: 'white',
              padding: '1rem',
            }}
          >
            Ons blog
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
