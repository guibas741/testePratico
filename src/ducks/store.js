import {combineReducers} from 'redux';
import authDuck from './modules/authDuck';
import lawsuitsDuck from './modules/lawsuitsDuck';

const appReducer = combineReducers({
  auth: authDuck,
  lawsuit: lawsuitsDuck,
});

export default (state, action) => appReducer(state, action);
