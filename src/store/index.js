import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducres';

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
