import {combineReducers} from 'redux';
import animateReducer from './animate';
import productReducer from './product';
import authReducer from './auth';
import userReducers from './user';
import addressReducers from './address';
import historyReducer from './history'

const indexReducer = combineReducers({
    animate : animateReducer,
    product : productReducer,
    auth: authReducer,
    user: userReducers,
    address:addressReducers,
    history:historyReducer
})

export default indexReducer;
