import React, { Component } from 'react';
import TabLayout from '../components/TabLayout';
import { connect } from 'react-redux';
import customerActions from '../redux/customer/actions';
import { bindActionCreators } from 'redux';
import ResponsiveDrawer from '../components/ResponsiveDrawer';
import CustomerBasicInfo from '../components/customer/CustomerBasicInfo';
import Router from '../components/Router';


const {
  fetchCustomerDetails,
  updateCustomerFeature,
  updateScreenTrackingFeature,
  updateAnalyticsFeature,
  updateCustomerData,
  updateCustomerTheme
} = customerActions;


class CustomerContainer extends Component {
  constructor(props) {
    super(props);
    this.switchHandler = this.switchHandler.bind(this);
    this.screenTrackingSwitchHandler = this.screenTrackingSwitchHandler.bind(this);
    this.analyticsTextChangeHandler = this.analyticsTextChangeHandler.bind(this);
    this.onUpdateHandler = this.onUpdateHandler.bind(this);
    this.onChangeColorHandler = this.onChangeColorHandler.bind(this);
  }
  componentDidMount() {
    this.props.fetchCustomerDetails();
  }


  onChangeColorHandler(colorCode,themeSection,objToUpdate){
    debugger
    switch(themeSection){
      case 'Brand Color' :{
        objToUpdate.theme.brandcolor = colorCode;
        this.props.updateCustomerTheme(objToUpdate);
        break;
      }
      case 'Background Color' :{
        objToUpdate.theme.backgroundcolor = colorCode;
        this.props.updateCustomerTheme(objToUpdate);
        break;
      }
      default:
      break;
    }
    console.log(colorCode);
  }
  
  analyticsTextChangeHandler(updatedEventData, UpdatedObj) {
    this.props.updateAnalyticsFeature(UpdatedObj);
  }

  screenTrackingSwitchHandler(event, screenTrakingData, switchItem, pagename, actionType) {
    debugger
    const copyScreenTrakingData = Object.assign([], screenTrakingData)
    switch (actionType) {
      case 'ON_PAGE_ACTION_FIRE': {
        const itemToUpdated = {
          pagename: switchItem,
          canTrackPage: event.target.checked,
          actions: copyScreenTrakingData.filter(item => item.pagename === pagename).map(item => item.actions)[0]
        };
        const index = copyScreenTrakingData.findIndex(
          item => item.pagename === itemToUpdated.pagename
        );
        const updatedscreenTrakingDataofPage = [
          ...copyScreenTrakingData.slice(0, index),
          itemToUpdated,
          ...copyScreenTrakingData.slice(index + 1)
        ];
        //console.log(screenTrakingData)
        //console.log(updatedscreenTrakingDataofPage)
        this.props.updateScreenTrackingFeature(updatedscreenTrakingDataofPage);
        break;
      }

      case 'ONACTION_ACTION_FIRE': {
        const itemActionToUpdated = {
          actionname: switchItem,
          canTrackAction: event.target.checked,
        };
        let pageData = copyScreenTrakingData.filter(item => item.pagename === pagename)
        const pageAction = pageData.map(item => item.actions)[0]
        const index = pageAction.findIndex(items => items.actionname === itemActionToUpdated.actionname);
        const updatedActionsOfPage = [
          ...pageAction.slice(0, index),
          itemActionToUpdated,
          ...pageAction.slice(index + 1)
        ];
        const actionsObj = { actions: updatedActionsOfPage }
        const mergedUpdatedActionOnPage = Object.assign({}, pageData[0], actionsObj);
        const pageIndex = copyScreenTrakingData.findIndex(item => item.pagename === mergedUpdatedActionOnPage.pagename)
        console.log(pageIndex)
        const updatedscreenTrakingData = [
          ...copyScreenTrakingData.slice(0, index),
          mergedUpdatedActionOnPage,
          ...copyScreenTrakingData.slice(index + 1)
        ]
        // console.log(screenTrakingData)
        //console.log(updatedscreenTrakingData)
        this.props.updateScreenTrackingFeature(updatedscreenTrakingData);
        break;
      }
      default:
        break;
    }
  }
  switchHandler(event, featureList, switchItem, actionType) {
    const updatedItem = {
      featurename: switchItem,
      enable: event.target.checked
    };
    const index = featureList.ess.findIndex(
      item => item.featurename === updatedItem.featurename
    );
    const updatedList = [
      ...featureList.ess.slice(0, index),
      updatedItem,
      ...featureList.ess.slice(index + 1)
    ];
    this.props.updateCustomerFeature(updatedList);
  }
  onFeatureChanged(event, featureList, switchItem) {
    const updatedItem = { featurename: switchItem, enable: event.target.checked };
    const index = featureList.ess.findIndex(item => item.featurename === updatedItem.featurename)
    const updatedList = [
      ...featureList.ess.slice(0, index),
      updatedItem,
      ...featureList.ess.slice(index + 1)
    ]
    this.props.updateCustomerFeature(updatedList);
  }

  onUpdateHandler(events)
  {
    debugger
    this.props.updateCustomerData(this.props.customer);
  }

  render() {
    debugger
    const { CustomerKey, customerid, customername, canAudit } = this.props.customer;
    const MetaData = {
      CustomerKey,
      customerid,
      customername,
      canAudit
    }
    return (
      <div>
        <Router data={this.props.customer}
        switchHandler={this.switchHandler}
        screenTrackingSwitchHandler={this.screenTrackingSwitchHandler}
        analyticsTextChangeHandler={this.analyticsTextChangeHandler}
        onUpdateHandler = {this.onUpdateHandler}
        onChangeColorHandler = {this.onChangeColorHandler}></Router>
      {/* <TabLayout
        data={this.props.customer}
        switchHandler={this.switchHandler}
        screenTrackingSwitchHandler={this.screenTrackingSwitchHandler}
        analyticsTextChangeHandler={this.analyticsTextChangeHandler}
        onUpdateHandler = {this.onUpdateHandler}
        onChangeColorHandler = {this.onChangeColorHandler}
      /> */}
      </div>
      );
  }
}

const mapStateToProps = ({ Customer: customer }) => {
  return {
    customer: customer.customer

  }
}

const mapDispatchToProps = (dispatch) => {
  //  console.log(fetchCustomerDetails);
  return bindActionCreators(
    { fetchCustomerDetails, updateCustomerFeature, updateScreenTrackingFeature, updateAnalyticsFeature,updateCustomerData,updateCustomerTheme },
    dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(CustomerContainer);
