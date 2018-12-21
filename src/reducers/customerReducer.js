
import CustomerDetail from './../reducers/DummyData/cps';

const defaultState = {
   
    customer :{},
    features :{
        "ess" : [
            {
                featurename : "abc",
                enable: true,
            }
        ]
            
    }
       
}

 const customerReducer = (state = defaultState, action) => {

    switch (action.type) {
        case "FETCH_CUSTOMER_DETAIL": {
            // const customer = { ...state ,...action.payload };
            // return {
            //     customer
            // }
            return{
                ...state,
                customer : action.payload
            }
        }
        case "CUSTOMER_FEATURE_UPDATE":{
            //  const copyCustomer = Object.assign({},state);
            //     copyCustomer.customer.features.ess = action.payload;
            // return {...copyCustomer}
            //const featureUpdated = {   };
            return {
                ...state,
                featureUpdated : action.payload
            }
            
        }
        default: {
            return state;
        }
    }

}
export default customerReducer;


