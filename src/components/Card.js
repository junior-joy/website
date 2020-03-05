import React, { Component, Fragment } from 'react'
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

class JCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      expanded: false
    }
    this.handleExpandClick = this.handleExpandClick.bind(this)
  }

  handleExpandClick() {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const { children, image, title, subtitle, items, actionText, info } = this.props
    const { expanded } = this.state
    return(
      <Card elevation={3}>
        <CardMedia
          image={image}
          title={ title }
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
        onClick={this.handleExpandClick}>
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
            {children}
          </CardContent>
        </Collapse>
      </Card>
    )
  }
}



export default JCard
