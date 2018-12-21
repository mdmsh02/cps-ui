import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SwitchControlLayout from './SwitchControlLayout';
const styles = {
  card: {
    minWidth: 275,
    maxWidth : 400,
    margin : 10,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 6,
  },
 
};

function CardLayout(props) {
  const { classes } = props;
 
  return (

    <Card className={classes.card}>
      <CardContent>
        <Typography  component="h2" variant="h5"  color="textPrimary" gutterBottom>
          {props.screenData.pagename}
        </Typography>
        <Typography className={classes.title} >
         Enable/Disable Actions on Page 
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        {
          props.screenData.actions.map((action,index) =>(
      <SwitchControlLayout name={action.actionname} action={action.canTrackAction}/>
          ))
      }
       
        </Typography>
      </CardContent>
        <hr/>
      <CardActions>
      
      <SwitchControlLayout name ={"CanTrack "+props.screenData.pagename+" page"} action={props.screenData.canTrackPage}/>
      
     
      </CardActions>
    </Card>

  );
}

CardLayout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardLayout);