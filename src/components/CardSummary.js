import React from 'react'
import { extras } from './form/App'


import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';

const renderTitle = packageChoice => {
  switch( packageChoice ) {
    case 'single':
      return '1 x / week'
    case 'basic':
      return 'Basispakket'
    case 'extra':
      return 'Uitgebreid Pakket'
  }
}


const determineStartPrice = ( color, packageChoice ) => {
  switch( packageChoice ) {
    case 'single':
      return color === 'rood' ? 135 : 199
    case 'basic':
      return color === 'rood' ? 195 : 265
    case 'extra':
      return color === 'rood' ? 195 : 265
  }
}


const Tags = ({ priceSummary }) => {
  const { color, packageChoice, extra } = priceSummary
  const extraItems = extras(color).filter( item => extra[item.value] )
  const totalPrice = determineStartPrice(color.verbose, packageChoice) + extraItems.reduce( (aa, bb) => aa + bb.price, 0 )

  return(
    <Card style={{ position: 'sticky', top: '8rem', minWidth: '14rem' }}>
      <CardMedia
        image="https://res.cloudinary.com/junior-joy/image/upload/q_auto,f_auto/v1577884542/impressie/teun_olu3pd.jpg"
        title={ color.code }
        style={{ height: '12rem' }}
      >
        <div style={{ background: `linear-gradient(${ color.code }64, ${ color.code }64)`, height: '100%' }}>
          <CardHeader
            title={
              <h2 style={{ marginBottom: '0', color: 'white' }}>{renderTitle(packageChoice)}</h2>
            }
          />
        </div>
      </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2" className="has-text-primary">
          €{determineStartPrice(color.verbose, packageChoice)} {renderTitle(packageChoice)} - {color.verbose.toUpperCase()}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {extraItems.map( item => (
            <p>€{item.price} - {item.label}</p>
          ))}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        </Typography>
      </CardContent>
      <CardActions>
        Totaal: €{totalPrice}
      </CardActions>
    </Card>
  )
}



export default Tags
