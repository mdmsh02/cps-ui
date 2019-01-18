import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const styles = theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  dense: {
    marginTop: 16
  }
});

function CustomerAnalytics(props) {
  const { classes, analyticsData } = props;
  console.log(analyticsData);
  const dtoAnalytics = Object.keys(analyticsData).map(item => {
    return { name: item, values: analyticsData[item] };
  });
 
  console.log(dtoAnalytics);
  return (
    <div>
      <h2> Analytics </h2>

      {dtoAnalytics.map((item, rootIndex) => (
        <div className={classes.root} key={rootIndex}>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>{item.name}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <form className={classes.container} noValidate autoComplete="off">
                {Object.keys(item.values).map((key,childIndex) => {
                   
                   const updatedObj = { [item.name] : analyticsData[item.name]};
                  return <TextField
                    name ={key}
                    key={childIndex}
                    id="filled-full-width"
                    label={key}
                    value={item.values[key]}
                    style={{ margin: 8 }}
                    className={classes.textField}
                    placeholder="Key"
                    onChange={event => {
                      props.onChangeHandler(item.values[key]=event.target.value,  updatedObj,dtoAnalytics);
                    }}
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                })}
              </form>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
      ))}
    </div>
  );
}

CustomerAnalytics.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CustomerAnalytics);
