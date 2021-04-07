import {combineReducers} from 'redux';
import {weather} from './weatther';

const rootReducer = combineReducers({
  weather,
});

export default rootReducer;
