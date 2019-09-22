import { combineReducers } from 'redux';

import promotions from './promotions';
import login from './login';

const appReducer = combineReducers({
  promotions,
  login
});

export default appReducer;
