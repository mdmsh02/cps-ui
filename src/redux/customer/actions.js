
const customerAction = {
    FETCH_THEME_SUCCESS: "FETCH_THEME_SUCCESS",
    FETCH_CUSTOMER_DETAIL: "FETCH_CUSTOMER_DETAIL",
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