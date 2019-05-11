import { combineReducers } from 'redux';
import entities from './entities';
import loading from './loading';
import error from './error';

const appReducer = combineReducers({
  entities,
  loading,
  error,
});

export default (state, action) => appReducer(state, action);