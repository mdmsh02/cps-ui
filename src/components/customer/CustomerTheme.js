import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import ColorPicker from 'material-ui-color-picker';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import deepOrange from '@material-ui/core/colors/deepOrange';

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    backgroundColor: "DodgerBlue"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  dense: {
    margin: 16
  },
  menu: {
    width: 200
  }
});


const CustomerTheme = props => {
  const { classes } = props;
  debugger
  return (
    <div>
      <h2>Customer Theme</h2>
      <form noValidate autoComplete="off">
        <div className={classes.dense}>
       
            <ColorPicker
              name='Brand Color'
              label="Brand Color"
              defaultValue={props.theme.brandcolor}
              value={props.theme.brandcolor}
              onChange={color => console.log(color)}
              // style={{ fontColor: '#0000' }}
            />


       
        </div>
       
          <div className={classes.dense}>
            <ColorPicker
              name='Background Color'
              label="Background Color"
              defaultValue={props.theme.backgroundcolor}
              value={props.theme.backgroundcolor}
              onChange={color => console.log(color)}
            />
          </div>
         
       
      </form>
    </div>
  );
}


CustomerTheme.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CustomerTheme);
