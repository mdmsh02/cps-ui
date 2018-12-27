import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import { AppBar, Fab, Toolbar, IconButton, CssBaseline, Menu, MenuItem, Select, FilledInput, Button } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import CustomerBasicInfo from "./customer/CustomerBasicInfo";
import CustomerTheme from './customer/CustomerTheme';
import CustomerFeatures from './customer/CustomerFeatures';
import CustomerScreenTracking from './customer/CustomerScreenTracking';
import CustomerAnalytics from './customer/CustomerAnalytics';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import * as deepmerge from 'deepmerge';
import '../App.css';
function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
const muitheme = createMuiTheme({
  palette: {
    primary: green,
  },
  typography: {
    useNextVariants: true,
  },
});

const options = [
  'DEV',
  'TEST',
  'SB-1'
];

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
  text: {
    paddingTop: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
  },
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing.unit * 2,
  },
  subHeader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    bottom: 0,
    top: 'auto',
  },
  toolbar: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  multilineColor: {
    color: 'red',
  }
});


const ITEM_HEIGHT = 48;



class TabLayout extends React.Component {
  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  state = {
    value: 0,
    anchorEl: null,
    env: '',
    name: 'hai',
    labelWidth: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
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
  render() {

    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    const { classes, data, switchHandler, screenTrackingSwitchHandler, analyticsTextChangeHandler, onUpdateHandler } = this.props;
    const { value } = this.state;
    const { CustomerKey, customerid, customername, canAudit } = data;
    const MetaData = {
      CustomerKey,
      customerid,
      customername,
      canAudit
    }
    const { theme } = data;
    const { features } = data;
    const { screenTracking } = data;
    const { googleanalytics, appcenteranalytics } = deepmerge({}, data);
    const Analytics = {
      googleanalytics,
      appcenteranalytics
    }
    console.log(data);
    return (
      <React.Fragment>
        <CssBaseline />
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar className={classes.toolbar}>
              <Tabs value={value} onChange={this.handleChange}>
                <Tab label="Baisc Infomration" />
                <Tab label="Themes" />
                <Tab label="Features" />
                <Tab label="Screen Tracking" />
                <Tab label="Analytics" />
              </Tabs>
              <div>
                <MuiThemeProvider theme={muitheme}>
                  <Button variant="contained" color="primary" onClick={onUpdateHandler} className="labelColor">
                    Save
        </Button>
                </MuiThemeProvider>
              </div>
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
            </Toolbar>
          </AppBar>
          {value === 0 && <TabContainer>
            <CustomerBasicInfo basicInfo={MetaData} />
          </TabContainer>}
          {value === 1 && <TabContainer>
            <CustomerTheme theme={theme} />
          </TabContainer>}
          {value === 2 && <TabContainer>
            <CustomerFeatures feature={features} switchHandler={switchHandler}></CustomerFeatures>
          </TabContainer>}
          {value === 3 && <TabContainer>
            <CustomerScreenTracking screenTracking={screenTracking} switchHandler={screenTrackingSwitchHandler} />
          </TabContainer>}
          {value === 4 && <TabContainer>
            <CustomerAnalytics analyticsData={Analytics} onChangeHandler={analyticsTextChangeHandler} />
          </TabContainer>}

        </div>

        <AppBar position="fixed" color="primary" className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <Fab color="secondary" aria-label="Add" className={classes.fabButton}>
              <AddIcon />
            </Fab>

          </Toolbar>

        </AppBar>

      </React.Fragment>
    );
  }
}

TabLayout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TabLayout);