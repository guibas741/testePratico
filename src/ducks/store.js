import {combineReducers} from 'redux';
import authDuck from './modules/authDuck';

const appReducer = combineReducers({
  auth: authDuck,
});

export default (state, action) => appReducer(state, action);
