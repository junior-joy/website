import React from 'react'
import PropTypes from 'prop-types'
import { graphql, navigate, Link } from 'gatsby'
import Layout from '../components/Layout'
import Card from '../components/Card'
import Content, { HTMLContent } from '../components/Content'
import Typography from '@material-ui/core/Typography';


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
                  De kleuren staan voor de balsoort en baangrootte. In onderstaand schema staat weergegeven welke leeftijd bij welke kleur hoort. Het niveau van het kind is bepalend voor de kleur waarin het speelt, vandaar dat er in het schema veel overlap in leeftijd te zien is.
                </p>
                <img alt="KNLTB Kleurenindeling" src="https://res.cloudinary.com/junior-joy/image/upload/v1581803370/Cards/tenniskids-leeftijdsindeling_bjcnbw.jpg" style={{  width: "100%" }}/><br />
                <h3 className="title is-size-3 has-text-weight-bold is-bold-light">
                  Door naar de volgende kleur
                </h3>
                <p>
                  De doorgroei naar een volgende kleur is afhankelijk van het niveau van het kind en niet enkel de leeftijd. Op basis van het niveau beslist de trainer of het kind door kan naar de volgende kleur. Op deze manier zorgen we er voor dat de kinderen qua niveau in homogene groepen trainen. Daarbij zullen we ten behoeve van de tennisontwikkeling in training regelmatig variaren in gebruik van baltype en baangrootte.
                </p>
                <br />
                <h3 className="title is-size-3 has-text-weight-bold is-bold-light">
                  Een uitgebreid overzicht
                </h3>
                <div className="columns">
                  <div className="column">
                    <Card
                      image="https://res.cloudinary.com/junior-joy/image/upload/v1581802712/Cards/tenniskids-rode-baan_n1hyfj.jpg"
                      title="ROOD"
                      subtitle="Beheers de basis"
                      items={[
                        "Zachte grote bal op miniveld",
                        "Leer de basis van alle slagen",
                        "Speel je eerste wedstrijdjes"
                      ]}
                      actionText="De basis voor de rest van je tennisleven."
                    >
                      <Typography paragraph variant="h5">ROOD</Typography>
                      <Typography paragraph>
                        In Tenniskids Rood maken kinderen kennis met het tennisspel. Ze leren de basisvaardigheden op het gebied van bewegen en coördinatie. Kinderen van 8 jaar kunnen in rood of oranje spelen, de trainer adviseert of een kind qua niveau eerder of langer in een kleur speelt. Kinderen die tennissen in rood maken kennis met leuke activiteiten en spelen korte wedstrijden in de Tenniskids competitie: de Rode competitie. Daarnaast kunnen zij meedoen aan korte toernooitjes, vaak van een dag of dagdeel. Er wordt in rood gespeeld met een zachte rode bal op een minibaan (6x12 meter). Het racket is tussen de 43 en 58 cm.
                      </Typography>
                    </Card>
                  </div>
                  <div className="column">
                    <Card
                      image="https://res.cloudinary.com/junior-joy/image/upload/v1581802712/Cards/tenniskids-oranje-baan_yibm5q.jpg"
                      title="ORANJE"
                      subtitle="Word de baas op het veld"
                      items={[
                        "Kleinere bal dan rood maar wel zacht",
                        "3/4 baan in de lengte, volledige baan in de breedte",
                        "Leer de basis van tennistactiek"
                      ]}
                      actionText="Leer samenspelen en het spel begrijpen."
                    >
                        <Typography paragraph variant="h5">ORANJE</Typography>
                      <Typography paragraph>
                        In de volgende fase van Tenniskids wordt gewerkt aan de verdere ontwikkeling. De kinderen leren nieuwe slagen en technieken die hen helpen om uiteindelijk te kunnen spelen op een grote baan. Er wordt gespeeld op een driekwartbaan (een volledige baan die in de lengte is ingekort tot 18 meter). Er wordt gespeeld met een bal die geschikt is voor het spelen op een driekwartbaan (zachter en lichter dan een gele tennisbal). Het racket is tussen de 56 en 63,5 cm. De wedstrijden worden steeds langer en in deze fase kunnen kinderen deelnemen aan de Tenniskids competitie Oranje competitie. Ook kunnen kinderen in oranje meedoen aan toernooitjes, dit zijn meestal eendaagse toernooitjes.
                      </Typography>
                    </Card>
                  </div>
                </div>
                <div className="columns">
                  <div className="column">
                    <Card
                      image="https://res.cloudinary.com/junior-joy/image/upload/v1581802712/Cards/tenniskids-groene-baan_ehgvy0.jpg"
                      title="GROEN"
                      subtitle="Beheers de basis"
                      items={[
                        "Zachte grote bal op miniveld",
                        "Leer de basis van alle slagen",
                        "Speel je eerste wedstrijdjes"
                      ]}
                      actionText="De basis voor de rest van je tennisleven."
                    >
                      <Typography paragraph variant="h5">GROEN</Typography>
                      <Typography paragraph>
                        Dit is de laatste fase in de voorbereiding op ‘hele baan’ tennis. Kinderen in deze leeftijd zijn groter en in staat om de hele baan te bestrijken. Er wordt dan ook op een 'hele baan'getennist. Bij de dubbels wordt er gespeeld in het dubbelveld, dus inclusief de tramrails. Technieken, tactieken en atletisch vaardigheden worden in deze fase verder ontwikkeld. De wedstrijden worden weer wat langer en het wedstrijden spelen speelt een steeds belangrijkere rol. De Tenniskids competitie die bij deze fase hoort is de Groene competitie. De groene toernooitjes die worden georganiseerd zijn vaak over meerdere dagen verspreid zijn. Tevens zijn groene toernooitjes soms gekoppeld aan een open jeugdtoernooi. Er wordt in groen gespeeld met een langzame groene bal die geschikt is voor tennis op een hele baan en met een racket dat tussen de 63,5 en 66 cm lang is.
                      </Typography>
                    </Card>
                  </div>
                  <div className="column">
                    <Card
                      image="https://res.cloudinary.com/junior-joy/image/upload/v1581802712/Cards/tennisbaan_geel_gy1hz6.png"
                      title="GEEL"
                      subtitle="Het volledige plaatje"
                      items={[
                        "Met de 'normale' gele bal",
                        "Op groot veld",
                        "Ontwikkel jouw spelplan"
                      ]}
                      actionText="Het volledige spel op de grote baan met gele bal"
                    >
                      <Typography paragraph variant="h5">GEEL</Typography>
                      <Typography paragraph>
                        Na groen zijn kinderen helemaal klaar om op een hele baan te tennissen met de bekende gele bal. Ze beheersen de juiste techniek om op een heel veld rally’s te spelen. De kinderen in de leeftijd van 11 t/m 17 jaar kunnen dan ook mee gaan doen aan de KNLTB Junioren competitie in het voor- en najaar.
                      </Typography>
                    </Card>
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
  query CategoriesPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
