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
                <p>
                  In het winterseizoen, oktober t/m maart, gaan we zowel binnen als buiten training geven. De banen van Joy Jaagpad blijven 6 maanden open, mits het weer het toelaat. Maar voor de continuïteit hebben we wel al nagedacht over een vangnet op het moment dat de banen op Joy onbespeelbaar zijn. Lees hier de mogelijkheden.<br/><br/>
                </p>
                <div className="columns">
                  <div className="column">
                    <Card
                      image="https://res.cloudinary.com/junior-joy/image/upload/v1580153447/Schermafbeelding_2019-12-30_om_20.15.09_rlineu.png"
                      title="Buiten en binnen training"
                      subtitle="3 maanden binnen en 3 maanden buiten"
                      items={[
                        "Oktober, november en maart buiten op Joy Jaagpad (met garantie op uitwijk naar binnen)",
                        "December, januari, februari binnen op Tennispark Sloterplas of TV Osdorp (je kunt een voorkeur aangeven)",
                      ]}
                      actionText="LET OP: voor deze optie geldt een beperkt aantal plekken."
                      actionButton={{ header: 'Aanmelden', to: 'https://form.jotform.com/Inspire_tennis/junior-joy-wintertraining-202021' }}
                    >
                      <Typography paragraph variant="h5">Kosten</Typography>
                      <Typography paragraph variant="paragraph">
                        De kosten zijn gebasseerd op 18 weken training van 60 minuten, van oktober t/m maart. Er wordt niet getraind tijdens schoolvakanties en feestdagen. Voor alle jeudgleden van Joy Jaagpad geldt een subsidie van €50,- pp. op deze training, dit om de kosten van de binnenbaanhuur wat te drukken.
                      </Typography>
                      <ul style={{ listStyle: 'initial', marginLeft: '2rem' }}>
                        <li>ROOD (4-8jr): €220,- pp. in een groep van maximaal 8 kinderen.</li>
                        <li>ORANJE / GROEN / GEEL: €382,- pp. in een groep van maximaal 4 kinderen.</li>
                      </ul><br />
                      <Typography paragraph variant="paragraph">
                      </Typography>
                      <Typography paragraph variant="h5">Vaker dan 1 keer trainen per week?</Typography>
                      <Typography paragraph variant="paragraph">
                        Dat kan! Je kunt meedoen aan de inlooptraining. Daarnaast kun je ook een vaste 2de training aanvragen.
                      </Typography>
                    </Card>
                  </div>
                  <div className="column">
                    <Card
                      image="https://res.cloudinary.com/junior-joy/image/upload/v1581536341/impressie/Schermafbeelding_2020-02-12_om_20.39.00_ljwjmj.png"
                      title="Buiten training"
                      subtitle="Buiten training met uitwijk"
                      items={[
                        "6 maanden buiten training",
                        "Training gaat bij te slecht weer niet door",
                        "18 weken training, waarvan 16 weken gegarandeerd"
                      ]}
                      actionText="LET OP: als de gravelbanen onbespeelbaar zijn, dan bestaat er de mogelijkheid om uit te wijken naar de all-weather banen van Sloterplas"
                      actionButton={{ header: 'Aanmelden', to: 'https://form.jotform.com/Inspire_tennis/junior-joy-wintertraining-202021' }}
                      >
                        <Typography paragraph variant="h5">Kosten</Typography>
                        <Typography paragraph variant="paragraph">
                           De kosten zijn gebasseerd op 18 weken training van 60 minuten, van oktober t/m maart. We hopen natuurlijk op een zachte winter en dat alle trainingen gegeven kunnen worden, maar we geven in ieder geval een gerantie van 16 weken training. Er wordt niet getraind tijdens schoolvakanties en feestdagen.
                        </Typography>
                       <ul style={{ listStyle: 'initial', marginLeft: '2rem' }}>
                        <li>ROOD (4-8jr): €180,- pp. in een groep van maximaal 8 kinderen.</li>
                        <li>ORANJE / GROEN / GEEL: €315,- pp. in een groep van maximaal 4 kinderen.</li>
                      </ul><br />
                        <Typography paragraph variant="h5">Vaker dan 1 keer trainen per week?</Typography>
                        <Typography paragraph variant="paragraph">
                          Dat kan! Je kunt meedoen aan de inlooptraining. Daarnaast kun je ook een vaste 2de training aanvragen.
                        </Typography>
                      </Card>
                  </div>
                </div>
                <br />
                <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                  Vaker trainen? Dat kan!
                </h2>
                <ExpansionPanel>
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>Fysieke training:</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <div>
                      <Typography paragraph variant="h5">Fysieke training</Typography>
                      <Typography paragraph>
                        krijg een betere conditie en ga beter bewegen.
                      </Typography>
                      <ul style={{ listStyle: 'initial', marginLeft: '2rem' }}>
                        <li>€100 - 18 weken</li>
                      </ul><br />
                    </div>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography>Duotraining:</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <div>
                      <Typography paragraph variant="h5">Duotraining</Typography>
                      <Typography paragraph>
                        Tijdens de duotraining heeft de trainer veel aandacht voor jouw en geeft een leuke training waarin jullie elkaar uitdagen om beter te worden.
                      </Typography>
                      <ul style={{ listStyle: 'initial', marginLeft: '2rem' }}>
                        <li>vanaf €540,- - 18 weken buiten</li>
                      </ul><br />
                    </div>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                  >
                    <Typography>Privétraining:</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <div>
                      <Typography paragraph variant="h5">Privétraining</Typography>
                      <Typography paragraph>
                        Een privétraining is een 1-op-1 training waarin de volledige aandacht ligt op jouw leerdoelen. Zo nu en dan een privétraining inplannen geeft de ontwikkeling een boost. Privétrainingen geven we normaliter pas aan kinderen vanaf 8 jaar oud.
                      </Typography>
                      <ul style={{ listStyle: 'initial', marginLeft: '2rem' }}>
                        <li>Vanaf €990,- - 18 weken buiten</li>
                        <li>€60,- - losse training</li>
                      </ul><br />
                    </div>
                  </ExpansionPanelDetails>
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
                <Link to="https://form.jotform.com/Inspire_tennis/junior-joy-wintertraining-202021">→ Schrijf je nu in</Link><br />
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
