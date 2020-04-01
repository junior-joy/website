import React from 'react'
import { navigate } from 'gatsby'


import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button';


const OfficeStories = ({ image, firstName, fullName, quote }) => {

  return(
    <Card elevation={3}>
       <CardActionArea
        onClick={() => navigate(`/trainers/${ firstName }`)}
       >
         <CardMedia
           style={{ height: '16rem' }}
           image={image}
           title={ firstName }
         />
         <CardContent>
           <Typography gutterBottom variant="h5" component="h2">
             {fullName}
           </Typography>
           <Typography variant="body2" color="textSecondary" style={{ fontStyle: 'italic' }}>
             {quote}
           </Typography>
         </CardContent>
       </CardActionArea>
       <CardActions>
         <Button size="small" color="primary"
          onClick={() => navigate(`/trainers/${ firstName }`)}>
           Ontmoet {firstName}
         </Button>
       </CardActions>
     </Card>
  )
}



export default OfficeStories
