import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Fab, Toolbar, IconButton, CssBaseline, Menu, MenuItem, Select, FilledInput } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AddIcon from '@material-ui/icons/Add';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Typography from '@material-ui/core/Typography';
import CustomerBasicInfo from "./customer/CustomerBasicInfo";
import CustomerTheme from './customer/CustomerTheme';
import CustomerFeatures from './customer/CustomerFeatures';
import CustomerScreenTracking from './customer/CustomerScreenTracking';
import CustomerAnalytics from './customer/CustomerAnalytics';
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
});
const options = [
  'None',
  'Atria',
  'Callisto',
  'Dione',
  'Ganymede',
  'Hangouts Call',
  'Luna',
  'Oberon',
  'Phobos',
  'Pyxis',
  'Sedna',
  'Titania',
  'Triton',
  'Umbriel',
];

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
    anchorEl: null
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    const { classes, data, switchHandler, screenTrackingSwitchHandler, analyticsTextChangeHandler } = this.props;
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
    const { googleanalytics, appcenteranalytics } = Object.assign({}, data);
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
                <Select
                  value={this.state.age}
                  onChange={this.handleChange}
                  input={<FilledInput name="age" id="filled-age-simple" />}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>

                {/* <IconButton
                  aria-label="More"
                  aria-owns={open ? 'long-menu' : undefined}
                  aria-haspopup="true"
                  onClick={this.handleClick}
                >
                  <MoreVertIcon />
                </IconButton> */}
                {/* <Menu
                  id="long-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={this.handleClose}
                  PaperProps={{
                    style: {
                      maxHeight: ITEM_HEIGHT * 4.5,
                      width: 200,
                    },
                  }}
                >
                  {options.map(option => (
                    <MenuItem key={option} selected={option === 'Pyxis'} onClick={this.handleClose}>
                      {option}
                    </MenuItem>
                  ))}
                </Menu> */}
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