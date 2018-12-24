import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import SwitchControlLayout from "./SwitchControlLayout";
const styles = {
  card: {
    minWidth: 275,
    maxWidth: 400,
    margin: 10
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 6
  }
};

function CardLayout(props) {
  const { classes,screenData,screenTracking } = props;

console.log(screenData)
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography
          component="h2"
          variant="h5"
          color="textPrimary"
          gutterBottom
        >
          {screenData.pagename}
        </Typography>
        <Typography className={classes.title}>
          Enable/Disable Actions on Page
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {screenData.actions.map((action, index) => (
             <div>
            <SwitchControlLayout
              key={action.actionname+index}
              name={action.actionname}
              action={action.canTrackAction}
              onchange={event =>
                props.switchHandler(
                  event,
                  screenTracking,
                  action.actionname,
                  screenData.pagename,
                  'ONACTION_ACTION_FIRE'
                  
                )
              }
            />
           
               <p>ActionName {action.actionname}</p>
            </div>
           
          ))}
        </Typography>
      </CardContent>
      <hr />
      <CardActions>
        <SwitchControlLayout
          name={"CanTrack " + screenData.pagename + " page"}
          action={screenData.canTrackPage}
          onchange={event =>
            props.switchHandler(
              event,
              screenTracking,
              screenData.pagename,
              screenData.pagename,
              "ON_PAGE_ACTION_FIRE"
            )
          }
        />
      </CardActions>
    </Card>
  );
}

CardLayout.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CardLayout);
