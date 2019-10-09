import { combineReducers } from 'redux';

import api from './api';
import auth from './auth';

const appReducer = combineReducers({
  api,
  auth
});

export default appReducer;
