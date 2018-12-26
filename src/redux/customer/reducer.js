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
            const copyCustomer = Object.assign({}, state);
            copyCustomer.customer.features.ess = action.payload;
            return copyCustomer;


        }

        case "CUSTOMER_SCREENTRACKING_UPDATE": {
            const copyCustomer = Object.assign({}, state);
            copyCustomer.customer.screenTracking = action.payload;
            return copyCustomer;

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


