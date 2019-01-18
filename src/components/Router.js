import React from "react";
import {connect} from "react-redux";
import { BrowserRouter as Router, Route,Switch, Link } from "react-router-dom";
import CustomerBasicInfo from "./customer/CustomerBasicInfo";
import CustomerFeatures from './customer/CustomerFeatures';
import CustomerTheme from "./customer/CustomerTheme";
import CustomerAnalytics from "./customer/CustomerAnalytics";
import ResponsiveDrawer from "./ResponsiveDrawer";
import * as deepmerge from 'deepmerge';
import CustomerScreenTracking from './customer/CustomerScreenTracking';



class DrawerRouter extends React.Component {


    render() {
        const {data,switchHandler, screenTrackingSwitchHandler, analyticsTextChangeHandler, onUpdateHandler ,onChangeColorHandler} = this.props;
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
        
        debugger
        return (

            <Router >
               <ResponsiveDrawer onUpdateHandler={onUpdateHandler}>
                <div>
                   
                    <Switch>
                    <Route exact path='/index.html' render={props => <CustomerBasicInfo {...props} basicInfo={MetaData} />} />
                    <Route  path='/CustomerFeatures' render={props => <CustomerFeatures {...props} feature={features} switchHandler = {switchHandler} />} />
                    <Route path='/CustomerTheme'render={props => <CustomerTheme {...props} theme={theme} onChangeColor = {onChangeColorHandler} />} />
                    <Route path='/CustomerAnalytics' render={props => <CustomerAnalytics {...props} analyticsData={Analytics}   onChangeHandler={analyticsTextChangeHandler}/>} />
                    <Route path='/CustomerScreenTracking' render={props => <CustomerScreenTracking {...props} screenTracking={screenTracking} switchHandler={screenTrackingSwitchHandler} />} />
                    </Switch>
                </div>
                </ResponsiveDrawer> 
            </Router>

        )
    }
}

export default connect(state => ({
  }))(DrawerRouter);