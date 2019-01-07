import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { MenuItem, Select } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    formControl: {
      margin: theme.spacing.unit,
      minWidth: 120,
    }
  });


class CustomerMenuLayout extends Component{
    state = {
        value: 0,
        anchorEl: null,
        env: '',
        name: 'hai',
        labelWidth: 0,
      };
      onChangeMenu = (event, value) => {
        debugger
        this.setState({ [event.target.name]: event.target.value });
      }

      componentDidMount() {
        this.setState({
          labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
        });
      }

    render(){

        const {classes} = this.props;
        // const { anchorEl } = this.state;
        // const open = Boolean(anchorEl);
        return(
            <div>
    <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel
            ref={ref => {
                this.InputLabelRef = ref;
            }}
            htmlFor="outlined-env-simple"
            className="labelColor"
        >
            ENV
          </InputLabel>
        <Select
            value={this.state.env}
            onChange={this.onChangeMenu}
            input={
                <OutlinedInput
                    labelWidth={this.state.labelWidth}
                    name="env"
                    id="outlined-env-simple"
                    className="labelColor"
                />

            }
        >

            <MenuItem value={10}>DEV</MenuItem>
            <MenuItem value={20}>TEST</MenuItem>
            <MenuItem value={30}>SB-1</MenuItem>
        </Select>
    </FormControl>
</div>
        );
    }
}
export default withStyles(styles)(CustomerMenuLayout);;