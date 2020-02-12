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
                <div className="columns">
                  <div className="column">
                    <Card
                      image="https://res.cloudinary.com/junior-joy/image/upload/v1580153447/Schermafbeelding_2019-12-30_om_20.15.09_rlineu.png"
                      title="Basistraining"
                      subtitle="Tennisspecifieke vaardigheden"
                      items={[
                        "Techniek",
                        "Tactiek",
                        "Voetenwerk"
                      ]}
                      actionText="Training met gelijkwaardige spelers en persoonlijke aandacht."
                    />
                  </div>
                  <div className="column">
                    <Card
                      image="https://res.cloudinary.com/junior-joy/image/upload/v1581536341/impressie/Schermafbeelding_2020-02-12_om_20.39.00_ljwjmj.png"
                      title="Skillstraining"
                      subtitle="Voor de brede ontwikkeling"
                      items={[
                        "Fysieke / motorische ontwikkeling",
                        "Leren spelen van wedstrijden",
                        "Mentale vaardigheden"
                      ]}
                      actionText="Een sterke basis om tennis nog sneller onder de knie te krijgen."
                    />
                  </div>
                </div>
                <br />
                <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                  Het basis pakket uitbreiden? Dat kan met korting!
                </h2>
                <ExpansionPanel>
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>2de groepstraining</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography>
                      Een 2de groepstraining toevoegen:
    
    - ROOD 6-8 p.= €115,- voor 12 weken.
    
    - ORANJE / GROEN / GEEL 4 p.= €180,- voor 12 weken.
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography>Expansion Panel 2</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography>
                      Duotraining, training met spelers:
     - €320,- voor 12 weken.
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                  >
                    <Typography>Privétraining:
    
    - €640,- voor 12 weken
    
    - €60,- per keer.  </Typography>
                  </ExpansionPanelSummary>
                </ExpansionPanel>

                <br/>

                <PageContent className="content" content={content} />
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">
                <Link to="/werkwijze">→ Lees meer over onze werkwijze</Link><br />
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
  query OfferPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
