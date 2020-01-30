import React from 'react'
import PropTypes from 'prop-types'
import { graphql, navigate, Link } from 'gatsby'
import Layout from '../components/Layout'
import Card from '../components/CardTrainer'
import Content, { HTMLContent } from '../components/Content'

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
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
                <div className="columns">
                  <div className="column">
                    <Card
                      image="https://res.cloudinary.com/junior-joy/image/upload/v1577894223/teun_ffehbw.png"
                      firstName="Teun"
                      fullName="Teun Kuijken"
                      quote='Vanaf jonge leeftijd wist ik het al: "Ik word later tennistrainer".'
                    />
                  </div>
                  <div className="column">
                    <Card
                      image="https://res.cloudinary.com/junior-joy/image/upload/c_scale,w_348/v1577894556/ray_foto_noh0tf.jpg"
                      firstName="Raymon"
                      fullName="Raymon Janson"
                      quote='Met mijn enthousiasme, humor en vakmanschap begeleid ik de jeugd bij hun tennisontwikkeling.'
                    />
                  </div>
                  <div className="column">
                    <Card
                      image="https://res.cloudinary.com/dzbt2ovfb/image/upload/v1580400553/customers/junior-joy/raoul_myawek.jpg"
                      firstName="Raoul"
                      fullName="Raoul Killaars"
                      quote='Plezier, enthousiasme en een positieve mentaliteit vind ik belangrijke elementen.'
                    />
                  </div>
                </div>
                <PageContent className="content" content={content} />
                <Link to="/werkwijze">Lees meer...</Link>
                <br/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout
      onSwipedLeft={() => navigate( '/blog' )}
      onSwipedRight={() => navigate( '/' )}
      phoneTitle={'Over ons'}
    >
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const AboutPageQuery = graphql`
  query TrainersPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
