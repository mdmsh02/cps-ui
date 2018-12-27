import * as merge from 'deepmerge'
const defaultState = {
    customer: {},
    features: {
        "ess": [
            {
                featurename: "abc",
                enable: true,
            }
        ]

    }
}
const customerReducer = (state = defaultState, action) => {

    switch (action.type) {
        case "FETCH_THEME_SUCCESS": {
            return {
                ...state,
                customer: action.payload
            }
        }
        case "UPDATE_CUSTOMER_SUCCESS": {
            debugger 
            return {
                ...state
            }
        }
        case "CUSTOMER_FEATURE_UPDATE": {
            debugger
            const featurePayload = {
                customer:{
                    features:{
                        ess:action.payload
                    }
                }
            }
            const overwriteMerge = (destinationArray, sourceArray, options) => sourceArray
            const updated = merge(state,featurePayload,{ arrayMerge: overwriteMerge });
            return updated


        }

        case "CUSTOMER_SCREENTRACKING_UPDATE": {
            const screenTrackingPayload = {
                customer:{
                    screenTracking:action.payload
                    
                }
            }
            const overwriteMerge = (destinationArray, sourceArray, options) => sourceArray
            const updated = merge(state,screenTrackingPayload,{ arrayMerge: overwriteMerge });
            return updated
        }

        case "CUSTOMER_ANALYTICS_UPDATE": {
            debugger
            const updatedCustomer = Object.assign({}, state.customer, action.payload);
            return {
                customer: updatedCustomer
            };


        }

        default: {
            return state;
        }
    }

}
export default customerReducer;


