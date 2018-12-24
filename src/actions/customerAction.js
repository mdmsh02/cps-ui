
import CustomerDetail from './../reducers/DummyData/cps';
import { fetchCustomer } from './customerAction';
// export function fetchCustomer(){
//     return{
//         type : 'FETCH_CUSTOMER_FULFILLED',
//         payload :{
//             name: "Will",
//             age: 35
//         }
//     }
// }

// export function fetchCustomer(){
//    const themes = CustomerDetail.GetThemes();
//     return function(dispatch){
//         dispatch({type:"FETCH_CUSTOMER_FULFILLED",payload : themes});
//     }
// }

export function fetchCustomerBasicInfo(){
    const baiscInfo = CustomerDetail.GetBaiscInfo();
    return function(dispatch){
        dispatch({type:"FETCH_CUSTOMER_BAISC_INFO",payload :baiscInfo})
    }
}

export function fetchCustomerTheme(){
    const custTheme= CustomerDetail.GetThemes();
    return (dispatch)=>{
        dispatch({type:"FETCH_CUSTOMER_THEME",payload:custTheme})
    }
}

export function fetchCustomerDetails(){
    const fakeData= CustomerDetail.fakeData;
    return (dispatch)=>{
        dispatch({type:"FETCH_CUSTOMER_DETAIL",payload:fakeData})
    }
}

export function updateCustomerFeature(param) {
    return (dispatch) =>{
        dispatch({type:"CUSTOMER_FEATURE_UPDATE",payload:param})
    }
}

export function updateScreenTrackingFeature(param) {
    return (dispatch) =>{
        dispatch({type:"CUSTOMER_SCREENTRACKING_UPDATE",payload:param})
    }
}

export function updateAnalyticsFeature(param) {
    return (dispatch) =>{
        dispatch({type:"CUSTOMER_ANALYTICS_UPDATE",payload:param})
    }
}

 // const fetchCustomerDetails = (dispatch) => dispatch({type:"FETCH_CUSTOMER_DETAIL",payload:CustomerDetail.fakeData})

 // export default fetchCustomerDetails;


    