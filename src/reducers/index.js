import {combineReducers} from 'redux';
import customer from './customerReducer';
import theme from './themeReducer';

export default combineReducers({
    customer,
    theme
})