import { combineReducers } from "redux";
import BookingReducer from "./BookingReducer";
export const rootReducer = combineReducers({
  BookingReducer: BookingReducer,
});
