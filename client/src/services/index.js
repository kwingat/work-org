import { combineReducers } from '@reduxjs/toolkit';
import operations from './reducers/operation';

const reducer = combineReducers({ operations });

export default reducer;
