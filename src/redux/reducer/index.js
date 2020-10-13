import {combineReducers} from 'redux';
import animateReducer from './animate';

const indexReducer = combineReducers({
    animate : animateReducer,
})

export default indexReducer;
