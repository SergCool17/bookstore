import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunkMiddleware from "redux-thunk";

import rootReducer from "./reducers";

export default () => {
  const store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware, logger)
  );
  window.store = store;
  return store;
};
