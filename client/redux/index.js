import { createStore, combineReducers, applyMiddleware } from "redux";
import { usersReducer } from "./users";
import { thunkMiddleware } from "redux-thunk";
import { createLogger } from "redux-logger";

const reducers = combineReducers({
  users: usersReducer,
});

const store = createStore(
  reducers,
  applyMiddleware(thunkMiddleware, createLogger())
);

export default store;
