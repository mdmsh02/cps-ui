
const customerAction = {
    FETCH_THEME_SUCCESS: "FETCH_THEME_SUCCESS",
    FETCH_CUSTOMER_DETAIL: "FETCH_CUSTOMER_DETAIL",
    UPDATE_CUSTOMER_DETAIL: "CUSTOMER_DATA_UPDATE",
    UPDATE_CUSTOMER_SUCCESS: "UPDATE_CUSTOMER_SUCCESS",
    fetchCustomerDetails: ()=> {
        return (dispatch)=>{
            dispatch({type:"FETCH_CUSTOMER_DETAIL",payload:""})
        }
    },
    
    updateCustomerFeature: (param)=> {
        debugger
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
    },

    updateCustomerData: (param) =>{
        debugger
        return (dispatch) =>{
            dispatch({type:"CUSTOMER_DATA_UPDATE",payload:param})
        }
    }
}
export default customerAction