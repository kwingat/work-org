import { combineReducers } from "@reduxjs/toolkit";
import operations from "./reducers/operations";

const reducer = combineReducers({ operations });

export default reducer;
