import { batchedSubscribe } from "redux-batched-subscribe";
import { configureStore } from "@reduxjs/toolkit";
import { debounce } from "lodash";
import logger from "redux-logger";
import reducer from "./services";

const preloadedState = {};

const debounceNotify = debounce((notify) => notify());

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== "production",
  preloadedState,
  enhancers: [batchedSubscribe(debounceNotify)],
});

export default store;
