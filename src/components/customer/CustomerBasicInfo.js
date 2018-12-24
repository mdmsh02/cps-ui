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


    const customerBasicInfo = props =>{
    
     // console.log(this.props.BaiscInfo);
        return (
          <div>
            <h2>Customer Basic Details</h2>
            <form  noValidate autoComplete="off">
              <TextField
                id="filled-full-width"
                label="Customer Id"
                value ={props.basicInfo.customerid}
                style={{ margin: 8 }}
                placeholder="Customer Id"
                helperText="unique id customer"
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
                label="Customer Key"
                value ={props.basicInfo.CustomerKey}
                style={{ margin: 8 }}
                placeholder="Customer Key"
                helperText="Unique key for customer"
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
                label="Customer Name"
                value={props.basicInfo.customername}
                style={{ margin: 8 }}
                placeholder="Customer Name"
                helperText="name of customer"
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
   

    customerBasicInfo.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(customerBasicInfo);
