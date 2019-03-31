import { combineReducers } from 'redux';
import users from './users.js';
import messages from './messages.js';

const Reducers = combineReducers({
    messages,
    users
});

export default Reducers;