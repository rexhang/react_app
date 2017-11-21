import { combineReducers } from 'redux';

import First from './Reducer-First.jsx';
import Second from './Reducer-Second.jsx';

export default combineReducers({
    First,
    Second
});