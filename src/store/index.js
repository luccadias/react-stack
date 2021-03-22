import { combineReducers } from 'redux'
import auth from './ducks/auth';

const reducers = combineReducers({
  auth,
});

export default reducers