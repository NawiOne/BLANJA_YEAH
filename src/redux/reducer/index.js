import {combineReducers} from 'redux';
import animateReducer from './animate';
import productReducer from './product';
import authReducer from './auth';

const indexReducer = combineReducers({
    animate : animateReducer,
    product : productReducer,
    auth: authReducer

})

export default indexReducer;
