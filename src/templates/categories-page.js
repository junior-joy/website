import React from 'react'
import PropTypes from 'prop-types'
import { graphql, navigate, Link } from 'gatsby'
import Layout from '../components/Layout'
import Card from '../components/Card'
import Content, { HTMLContent } from '../components/Content'

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


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
                <p>De kleuren staan voor de balsoort en baangrootte. In onderstaand schema staat weergegeven welke leeftijd bij welke kleur hoort. Het niveau van het kind is bepalend voor de kleur waarin het speelt, vandaar dat er in het schema veel overlap in leeftijd te zien is.</p>
                <img src="http://vanscheppingentennis.nl/data/fotos/tenniskids-leeftijdsindeling.jpg" style={{  width: "100%" }}/><br />
                  <h3 className="title is-size-3 has-text-weight-bold is-bold-light">
                    Door naar de volgende kleur
                  </h3>
                <p>Wij geven kineren duidelijkheid, wanneer ze naar de volgende kleur mogen. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><br />
                <div className="columns">
                  <div className="column">
                    <Card
                      image="https://www.hveldtennis.nl/htc/wp-content/uploads/rode-baan.png"
                      title="1x/week vaardigheden"
                      subtitle="Beheers alle basisvaardigheden"
                      items={[
                        "Balvaardigheid",
                        "Reactievermogen",
                        "Hard slaan"
                      ]}
                      actionText="Voor de rest van je leven profeit van een goede coordinatie."
                    />
                  </div>
                  <div className="column">
                    <Card
                      image="https://lh3.googleusercontent.com/-wcLst_fEvkM/VaoXW0pX1JI/AAAAAAAAPTc/9X11-c58ekc/s200-Ic42/2013-Tenniskids-regels-3-oranje-kids.jpg"
                      title="1x/week tactiek"
                      subtitle="Wordt de baas op het veld"
                      items={[
                        "Dubbel spel",
                        "Service",
                        "Strategie"
                      ]}
                      actionText="Leer samenspelen en het spel begrijpen."
                    />
                  </div>
                </div>
                <div className="columns">
                  <div className="column">
                    <Card
                      image="https://lh3.googleusercontent.com/-OOnlIyBnI5A/VaoXXJBY5GI/AAAAAAAAPS4/d1Mg1BiEKlM/s200-Ic42/2013-Tenniskids-regels-4-groene-kids.jpg"
                      title="1x/week vaardigheden"
                      subtitle="Beheers alle basisvaardigheden"
                      items={[
                        "Balvaardigheid",
                        "Reactievermogen",
                        "Hard slaan"
                      ]}
                      actionText="Voor de rest van je leven profeit van een goede coordinatie."
                    />
                  </div>
                  <div className="column">
                    <Card
                      image="https://res.cloudinary.com/dzbt2ovfb/image/upload/v1580386189/customers/junior-joy/yellow_cufcjn.png"
                      title="1x/week tactiek"
                      subtitle="Wordt de baas op het veld"
                      items={[
                        "Dubbel spel",
                        "Service",
                        "Strategie"
                      ]}
                      actionText="Leer samenspelen en het spel begrijpen."
                    />
                  </div>
                </div>
                <br/>

                <PageContent className="content" content={content} />
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">
                <Link to="/training/aanbod">→ Lees meer over ons aanbod</Link><br />
                <Link to="/training/inschrijven">→ Schrijf je nu in</Link><br />
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
  query CategoriesPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
