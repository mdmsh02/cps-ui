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
        case "CUSTOMER_FEATURE_UPDATE": {
            return {
                ...state,
                featureUpdated: action.payload
            }

        }
        default: {
            return state;
        }
    }

}
export default customerReducer;


