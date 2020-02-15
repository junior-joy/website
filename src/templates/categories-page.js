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
                <p>De doorgroei naar een volgende kleur is afhankelijk van het niveau van het kind en niet enkel de leeftijd. Op basis van het niveau beslist de trainer of het kind door kan naar de volgende kleur. Op deze manier zorgen we er voor dat de kinderen qua niveau in homogene groepen trainen. Daarbij zullen we ten behoeve van de tennisontwikkeling in training regelmatig variaren in gebruik van baltype en baangrootte.</p><br />
                 <h3 className="title is-size-3 has-text-weight-bold is-bold-light">
                    Een uitgebreid overzicht
                  </h3><div className="columns">
                  <div className="column">
                    <Card
                      image="https://www.hveldtennis.nl/htc/wp-content/uploads/rode-baan.png"
                      title="ROOD"
                      subtitle="Beheers de basis"
                      items={[
                        "Zachte grote bal op miniveld",
                        "Leer de basis van alle slagen",
                        "Speel je eerste wedstrijdjes"
                      ]}
                      actionText="De basis voor de rest van je tennisleven."
                    >
                      <Typography paragraph variant="h5">When and how should the payment be made?</Typography>
                      <Typography paragraph>
                        The booking fee of €50 should be paid prior to the shoot. The remaining amount can be paid in cash at the shoot or transferred via bank transfer (transfer fees may apply).
                      </Typography>
                      <Typography paragraph variant="h5">When and how can the photos be acquired?</Typography>
                      <Typography paragraph>
                        The photos will be downloadable within 20 working days (via WeTransfer and free of charge). Waiting time could be slightly longer during the high season. Do you require the photos urgently? The express fee is €50, the photos will be available within 5 working days.
                      </Typography>
                      <Typography paragraph variant="h5">When and how can the photos be acquired?</Typography>
                      <Typography paragraph>
                        Travel costs to locations outside of Amsterdam are not included in the above-mentioned price. Please mention your preferred location in the contact form to receive a tailored quote.
                      </Typography>
                      <Typography paragraph variant="h5">Unfavorable weather conditions?</Typography>
                      <Typography>
                        In case of heavy rain or stormy weather, the photoshoot can be rescheduled to a different time or date. Light rain is not a problem at all! Bringing along an umbrella will add that unique Dutch flavor to your photos!
                      </Typography>
                    </Card>
                  </div>
                  <div className="column">
                    <Card
                      image="https://lh3.googleusercontent.com/-wcLst_fEvkM/VaoXW0pX1JI/AAAAAAAAPTc/9X11-c58ekc/s200-Ic42/2013-Tenniskids-regels-3-oranje-kids.jpg"
                      title="ORANJE"
                      subtitle="Word de baas op het veld"
                      items={[
                        "Kleinere bal dan rood maar wel zacht",
                        "3/4 baan in de lengte, volledige baan in de breedte",
                        "Leer de basis van tennistactiek"
                      ]}
                      actionText="Leer samenspelen en het spel begrijpen."
                    />
                  </div>
                </div>
                <div className="columns">
                  <div className="column">
                    <Card
                      image="https://lh3.googleusercontent.com/-OOnlIyBnI5A/VaoXXJBY5GI/AAAAAAAAPS4/d1Mg1BiEKlM/s200-Ic42/2013-Tenniskids-regels-4-groene-kids.jpg"
                      title="GROEN"
                      subtitle="Bereid je voor op het grote werk"
                      items={[
                        "'Normale' balgrootte maar wel zachter dan geel",
                        "Op groot veld",
                        "Verfijning techniek en Verdieping tactiek"
                      ]}
                      actionText="Echte wedstrijden op volledige baan"
                    />
                  </div>
                  <div className="column">
                    <Card
                      image="https://res.cloudinary.com/dzbt2ovfb/image/upload/v1580386189/customers/junior-joy/yellow_cufcjn.png"
                      title="GEEL"
                      subtitle="Het volledige plaatje"
                      items={[
                        "Met de 'normale' gele bal",
                        "Op groot veld",
                        "Ontwikkel jouw spelplan"
                      ]}
                      actionText="Het volledige spel op de grote baan met gele bal"
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
