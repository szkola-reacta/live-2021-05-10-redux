import { combineReducers } from 'redux';

import usersReducer from './users/state';

const rootReducer = combineReducers({
  users: usersReducer,
});

export default rootReducer;
