
import CustomerDetail from '../../reducers/DummyData/cps';

const customerAction = {
    FETCH_THEME_SUCCESS: "FETCH_THEME_SUCCESS",
    FETCH_CUSTOMER_DETAIL: "FETCH_CUSTOMER_DETAIL",
    fetchCustomerBasicInfo: ()=> {
        const baiscInfo = CustomerDetail.GetBaiscInfo();
        return function(dispatch){
            dispatch({type:"FETCH_CUSTOMER_BAISC_INFO",payload :baiscInfo})
        }
    },
    
    fetchCustomerTheme: ()=> {
        const custTheme= CustomerDetail.GetThemes();
        return (dispatch)=>{
            dispatch({type:"FETCH_CUSTOMER_THEME",payload:custTheme})
        }
    },
    
    fetchCustomerDetails: ()=> {
        return (dispatch)=>{
            dispatch({type:"FETCH_CUSTOMER_DETAIL",payload:""})
        }
    },
    
    updateCustomerFeature: (param)=> {
        return (dispatch) =>{
            dispatch({type:"CUSTOMER_FEATURE_UPDATE",payload:param})
        }
    },
    updateScreenTrackingFeature: (param) => {
        return (dispatch) =>{
            dispatch({type:"CUSTOMER_SCREENTRACKING_UPDATE",payload:param})
        }
    },
    updateAnalyticsFeature: (param) => {
        return (dispatch) =>{
            dispatch({type:"CUSTOMER_ANALYTICS_UPDATE",payload:param})
        }
    }
}
export default customerAction