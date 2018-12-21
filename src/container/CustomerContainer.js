import React, { Component } from 'react';
import TabLayout from '../components/TabLayout';
import {connect} from 'react-redux';
import customerActions  from '../redux/customer/actions';
import {bindActionCreators} from 'redux';
const {fetchCustomerDetails,updateCustomerFeature}= customerActions;
class CustomerContainer extends Component {
   constructor(props){
       super(props);
       this.onFeatureChanged=this.onFeatureChanged.bind(this);
   }
    componentDidMount(){
        this.props.fetchCustomerDetails();
    }
    
    
    componentWillReceiveProps(nextProps){
        if(nextProps.updatedCustomer){
            console.log(this.props.customer)
            this.props.customer.features.ess = nextProps.updatedCustomer
        }
    }
    onFeatureChanged(event , featureList,switchItem){
        const updatedItem = {featurename:switchItem,enable:event.target.checked};
        const index = featureList.ess.findIndex(item => item.featurename === updatedItem.featurename)
        const updatedList= [
        ...featureList.ess.slice(0,index),
        updatedItem,
        ...featureList.ess.slice(index+1)
        ]
        this.props.updateCustomerFeature(updatedList);
    }
   render() {
      
     
     return (
       <div>
           
                <TabLayout data={this.props.customer} onFeatureChanged = {this.onFeatureChanged}></TabLayout>
           
       
       </div>
     );
   }
 }
 
 const mapStateToProps = ({Customer:customer}) =>{
     debugger
     return {
         customer: customer.customer,
         updatedCustomer : customer.customer.featureUpdated,
        
     }
 }

const mapDispatchToProps = (dispatch) =>{
  //  console.log(fetchCustomerDetails);
    return bindActionCreators({fetchCustomerDetails,updateCustomerFeature},dispatch);
}
 export default connect(mapStateToProps,mapDispatchToProps) (CustomerContainer);
