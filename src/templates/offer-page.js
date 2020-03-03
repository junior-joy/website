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
                  Wij adviseren om naast de basistraining ook onze skilltraining te volgen, samen vormen ze het basispakket. Op deze manier krijg je tennis sneller en beter onder de knie en ben je vaker op de club met je vrienden.<br /><br />
                </p>
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
                    >
                      <Typography paragraph variant="h5">Wat leer je tijdens de basistraining?</Typography>
                      <Typography paragraph variant="paragraph">
                        De basistraining is de training waarin gewerkt wordt aan tennisspecifieke vaardigheden.
                        Met heldere doelen werken we met de jeugd stap voor stap aan het ontwikkeling van technische vaardigheden om het tennisspel goed onder de knie te krijgen.
                        De techniek staat in dienst van de tactiek die het tennisspel in zich heeft, welke tactieken zijn dat?
                      </Typography>
                      <ul style={{ listStyle: 'initial', marginLeft: '2rem' }}>
                        <li>Vastheid: de bal kunnen controleren </li>
                        <li>Plaatsing: de bal kunnen sturen</li>
                        <li>Vaart: de bal kunnen versnellen</li>
                        <li>Rotatie: de bal laten draaien </li>
                        <li>Tempo: de bal snel of juist laat na de stuit pakken</li>
                      </ul><br />
                      <Typography paragraph variant="h5">Groepsgrootte</Typography>
                        Er wordt getraind in compacte groepen waarbij de trainers indeling op niveau.
                        Alleen als het niveau van de kinderen ongeveer gelijk is kunnen de kinderen van elkaar leren.<br/><br/>
                        De groepsgrootte:<br /><br />
                        ROOD: 6-8 personen<br />
                        ORANJE / GROEN / GEEL: maximaal 4 personen
                      <Typography paragraph variant="paragraph">

                      </Typography>
                      <Typography paragraph variant="h5">Uitbreiding basispakket</Typography>
                      <Typography paragraph variant="paragraph">
                        Het basispakket bestaat uit de basistraining + skillstraining.
                        Wil jij nog meer trainen? Dat kan. Breid jouw pakket uit met de trainingen die hieronder vermeld staan.
                      </Typography>
                    </Card>
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
                      >
                        <Typography paragraph variant="h5">Wat leer je tijdens de skillstraining?</Typography>
                        <Typography paragraph variant="paragraph">
                          Beter leren bewegen is sneller en beter leren tennissen. Tijdens de skillstraining staat het breedmotorisch leren centraal. Wij leren ze beter bewegen dit doen we op een leuke en speelse manier, denk daarbij bijvoorbeeld aan spelsport, circuit training en tikspelen. Ook zal er aandacht besteed worden aan het leren spelen van wedstrijden. Leer de tennisspelregels, leer om te gaan met je tegenstander en leer mentale vaardigheden.
                        </Typography>
                        <Typography paragraph variant="h5">Groepsgrootte</Typography>
                          Er wordt gewerkt in grote groepen, tot wel 20 kinderen, hierdoor houden we de kosten laag en leren kinderen nieuwe kinderen kennen. De training wordt gegeven door de tennistrainer die bijgestaan wordt door een assistent trainer.
                        <Typography paragraph variant="paragraph">

                        </Typography>
                        <Typography paragraph variant="h5">Vrije inloop </Typography>
                        <Typography paragraph variant="paragraph">
                          De skillstraining wordt op meerdere momenten in de week aangeboden. De planning wordt afgestemd op de beschikbaarheid van de kinderen. Je mag zelf weten op welk moment je komt, dat kan per week verschillen. Kun je een weekje niet komen, dan kom je een volgende week gewoon twee keer!
                        </Typography>
                      </Card>
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
                    <Typography>Tweede groepstraining:</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <div>
                      <Typography paragraph variant="h5">Tweede groepstraining</Typography>
                      <Typography paragraph>
                        Kom een tweede keer trainen in de groep. Dit is een zelfde training als de basistraining. Hiermee train je dus 3 x per week en zul je grote stappen maken in jouw tennisontwikkeling!
                      </Typography>
                      <ul style={{ listStyle: 'initial', marginLeft: '2rem' }}>
                        <li>Rood: €115 - 12 weken</li>
                        <li>Oranje: €180 - 12 weken</li>
                        <li>Groen: €180 - 12 weken</li>
                        <li>Geel: €180 - 12 weken</li>
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
                        <li>€320 - 12 weken</li>
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
                        <li>€640 - 12 weken</li>
                        <li>€60 - losse les</li>
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
