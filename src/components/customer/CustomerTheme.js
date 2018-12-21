import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const styles = theme => ({
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
  },
  menu: {
    width: 200
  }
});


    const CustomerTheme = props =>{
    
        return (
          <div>
            <h2>Customer Theme</h2>
            <form  noValidate autoComplete="off">
              <TextField
                id="filled-full-width"
                label="Brand Color"
                value ={props.theme.brandcolor}
                style={{ margin: 8 }}
                placeholder="Brand Color"
                helperText="Brand Color"
                fullWidth
                margin="normal"
                variant="filled"
                InputProps={{
                  readOnly: true
                }}
                InputLabelProps={{
                  shrink: true
                }}
              />
              <TextField
                id="filled-full-width"
                label="backgroundcolor"
                value ={props.theme.backgroundcolor}
                style={{ margin: 8 }}
                placeholder="backgroundcolor"
                helperText="backgroundcolor"
                fullWidth
                margin="normal"
                variant="filled"
                InputProps={{
                  readOnly: true
                }}
                InputLabelProps={{
                  shrink: true
                }}
              />
            </form>
            </div>
          );
    }
   

    CustomerTheme.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CustomerTheme);
