import { combineReducers } from "redux";
import newBooks from "./newBooks";
import filter from "./filter";

export default combineReducers({
  newBooks,
  filter
});
