import React, { Fragment } from 'react'

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';




import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';



const OfficeStories = ({ name, color, prePrice, price, items, action, goTo }) => {

  return(
    <Card elevation={3} className="color-card">
       <CardActionArea
        onClick={goTo}
       >
       <CardHeader
          title={name}
        />
        <Divider />
         <List component="nav" aria-label="main mailbox folders" style={{ background: color }}>
           <ListItem>
             <ListItemText primary={<Fragment>{prePrice}<Typography variant="h4">{`€${price}`}</Typography></Fragment>} />
           </ListItem>
           {items.map( item => (
             <ListItem>
               <ListItemText primary={item} />
             </ListItem>
           ))}
         </List>
         <CardActions>
           <Button size="small" color="primary"
           style={{ marginLeft: 'auto', marginRight: 'auto' }}
            onClick={goTo}>
             {action}
           </Button>
         </CardActions>
     </CardActionArea>
     </Card>
  )
}



export default OfficeStories
