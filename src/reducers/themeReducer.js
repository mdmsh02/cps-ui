const defaultState ={
Themes :{
    brandcolor : "",
    backgroundcolor : "",
}
}

const themeReducer = (state = defaultState ,action) =>{
    switch (action.type) {
        case "FETCH_CUSTOMER_THEME": {
            return { ...action.payload }
        }
      
        default: {
            return state;
        }
    }
}

export default themeReducer;