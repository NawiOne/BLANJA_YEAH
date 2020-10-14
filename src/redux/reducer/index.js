import {combineReducers} from 'redux';
import animateReducer from './animate';
import productReducer from './product';
import authReducer from './auth';
import userReducers from './user';

const indexReducer = combineReducers({
    animate : animateReducer,
    product : productReducer,
    auth: authReducer,
    user: userReducers,
})

export default indexReducer;
