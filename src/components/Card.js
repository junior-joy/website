import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { kebabCase } from 'lodash'
import { Link, graphql, navigate } from 'gatsby'
import Gallery from 'react-grid-gallery';
import clsx from 'clsx';


import Card from '@material-ui/core/Card';
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
import SportsTennisIcon from '@material-ui/icons/SportsTennis';


const OfficeStories = ({ image, title, subtitle, items, actionText, info }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return(
    <Card elevation={3}>
      <CardMedia
        image={image}
        title="Paella dish"
        style={{ height: '12rem' }}
      >
        <div style={{ background: 'linear-gradient(rgba(1, 19, 17, 0.7), rgba(2, 38, 34, 0.7))', height: '100%' }}>
          <CardHeader
            title={<h2 style={{ marginBottom: '0', color: 'white' }}>{title}</h2>}
          />
        </div>
      </CardMedia>
      <Divider />
      <List component="nav" aria-label="main mailbox folders"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            {subtitle}
          </ListSubheader>
        }
      >
        {items.map( item => (
          <ListItem button>
            <ListItemIcon>
              <SportsTennisIcon />
            </ListItemIcon>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
      <p style={{ padding: '1rem' }}>{actionText}</p>
      <CardActions disableSpacing
      onClick={handleExpandClick}>
        <span style={{
        marginLeft: 'auto',}}>Meer informatie</span>
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
          <Typography paragraph variant="h5">Stap voor stap beter leren tennissen</Typography>
          <Typography paragraph>
            Controle over het plaatsen van de bal is het allerbelangrijkste bij tennis. Je hebt te maken met een net, lijnen en de positie van je tegenstander. Maar deze controle is moeilijk omdat er geen direct contact is met de bal door het gebruik van een racket. Het ontwikkelen van het gevoel met racket en bal is een proces waarin vooral veel oefening belangrijk is. We oefenen dit door middel van:  - Rollen met racket en bal  - Slaan met racket en bal  - Hooghouden met racket en bal  
      </Typography>
          <Typography paragraph variant="h5">Op het juiste moment op de juiste plek</Typography>
          <Typography paragraph>
            Om de bal te bal te kunnen controleren is het inschatten van de bal en het innemen van de juiste positie van groot belang. Geen bal komt hetzelfde aan en vereist dus telkens weer een andere benadering. Om dit goed te kunnen moet je vrijwel over alle coördinatieve vaardigheden beschikken. Daarom behouden we de nadruk in onze training op:  - Aanpassingsvermogen  - Evenwichtsvermogen  - Koppelingsvermogen  - Hand-oog en voet-oog coördinatie  - Ruimtelijke oriëntatie  - Reactievermogen  - Ritmisch vermogen
          </Typography>
          <Typography paragraph variant="h5">We werken snel toe naar het spel spelen</Typography>
          <Typography paragraph>
            Tennis is voor ons echt een spel. Alles wat we de kinderen leren staat in het teken van meer succesbeleving in het spelletje. Al vanaf jonge leeftijd leren we de kinderen de basis van het tennisspel en laten we ze punten spelen. 
          </Typography>          
        </CardContent>
      </Collapse>
    </Card>
  )
}



export default OfficeStories
