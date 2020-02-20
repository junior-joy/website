import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { kebabCase } from 'lodash'
import { Link, graphql, navigate } from 'gatsby'


import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InfoIcon from '@material-ui/icons/Info';
import { makeStyles } from '@material-ui/core/styles';


import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Divider from '@material-ui/core/Divider';
import PhotoLibrary from '@material-ui/icons/PhotoLibrary';
import AccessTime from '@material-ui/icons/AccessTime';
import Euro from '@material-ui/icons/Euro'
import Button from '@material-ui/core/Button';


import Backdrop from '@material-ui/core/Backdrop';
import FileCopyIcon from '@material-ui/icons/FileCopyOutlined';
import SaveIcon from '@material-ui/icons/Save';
import PrintIcon from '@material-ui/icons/Print';


const Tags = ({ priceSummary }) => {
  const { color, packageChoice, extra } = priceSummary
  console.log( color )
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return(
    <Card style={{ position: 'sticky', top: '8rem', minWidth: '14rem' }}>
      <CardMedia
        image="https://res.cloudinary.com/dzbt2ovfb/image/upload/v1582119213/amsterdam/collection_uqoadd.jpg"
        title="Paella dish"
        style={{ height: '12rem' }}
      >
        <div style={{ background: `linear-gradient(${ color.code }64, ${ color.code }64)`, height: '100%' }}>
          <CardHeader
            title={<h2 style={{ marginBottom: '0', color: 'white' }}>{ packageChoice }</h2>}
          />
        </div>
      </CardMedia>
      <CardActionArea className="no-hover">
        <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              <Link to="/blog" className="has-text-primary">
              Discover our work
              </Link>
            </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            We like to share what we are working on. Click on the category that interests you the most.
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <p>Hi there</p>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        disableSpacing
        onClick={handleExpandClick}
      >
        <span style={{
        marginLeft: 'auto',}}>More info</span>
        <IconButton
          style={{
            transform: 'rotate(0deg)',
            transitionProperty: 'all',
            transitionDuration: '.5s',
            transform: (expanded ? 'rotate(180deg)' : ''),
          }}
          aria-label="show more"
          aria-expanded={expanded}
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
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
        </CardContent>
      </Collapse>
    </Card>
  )
}



export default Tags
