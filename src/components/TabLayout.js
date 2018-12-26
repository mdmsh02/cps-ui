import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
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
    backgroundColor: theme.palette.background.paper,
  },
});

class TabLayout extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes, data, switchHandler,screenTrackingSwitchHandler,analyticsTextChangeHandler } = this.props;
    const { value } = this.state;
    const {CustomerKey,customerid,customername,canAudit} = data;
      const MetaData ={
        CustomerKey,
        customerid,
        customername,
        canAudit
      }
      const {theme} = data;
      const {features} = data;
      const {screenTracking} = data;
      const {googleanalytics,appcenteranalytics} =Object.assign ({},data);
      const Analytics ={
        googleanalytics,
        appcenteranalytics
       } 
      console.log(data);
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="Baisc Infomration" />
            <Tab label="Themes" />
            <Tab label="Features" />
            <Tab label="Screen Tracking" />
            <Tab label="Analytics" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer>
           <CustomerBasicInfo basicInfo ={MetaData} />
        </TabContainer>}
        {value === 1 && <TabContainer>
            <CustomerTheme theme ={theme}/>
        </TabContainer>}
        {value === 2 && <TabContainer>
            <CustomerFeatures feature = {features} switchHandler = {switchHandler}></CustomerFeatures>
        </TabContainer>}
        {value === 3 && <TabContainer>
            <CustomerScreenTracking screenTracking = {screenTracking} switchHandler = {screenTrackingSwitchHandler} />
        </TabContainer>}
        {value === 4 && <TabContainer>
            <CustomerAnalytics analyticsData = {Analytics} onChangeHandler = {analyticsTextChangeHandler} />
        </TabContainer>}
      </div>
    );
  }
}

TabLayout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TabLayout);