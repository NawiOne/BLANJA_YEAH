import {combineReducers} from 'redux';
import animateReducer from './animate';
import productReducer from './product';

const indexReducer = combineReducers({
    animate : animateReducer,
    product : productReducer,
})

export default indexReducer;
