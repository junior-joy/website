import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { kebabCase } from 'lodash'
import { Link, graphql, navigate } from 'gatsby'
import Gallery from 'react-grid-gallery';
import clsx from 'clsx';


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
import SportsTennisIcon from '@material-ui/icons/SportsTennis';


const OfficeStories = ({ image, firstName, fullName, quote }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return(
    <Card elevation={3} className="color-card">
       <CardActionArea
        onClick={() => navigate(`/trainers/${ firstName }`)}
       >
       <CardHeader
          title={firstName}
        />
        <Divider />
         <List component="nav" aria-label="main mailbox folders" style={{ background: 'red' }}>
           <ListItem>
             <ListItemText primary='dfsadf' />
           </ListItem>
           <ListItem>
             <ListItemText primary='dfsadf' />
           </ListItem>
           <ListItem>
             <ListItemText primary='dfsadf' />
           </ListItem>
         </List>
       </CardActionArea>
       <CardActions>
         <Button size="small" color="primary"
         style={{ marginLeft: 'auto', marginRight: 'auto' }}
          onClick={() => navigate(`/trainers/${ firstName }`)}>
           Kies {firstName}
         </Button>
       </CardActions>
     </Card>
  )
}



export default OfficeStories
