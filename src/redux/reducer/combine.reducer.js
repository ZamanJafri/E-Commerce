import { combineReducers } from "@reduxjs/toolkit";
import CategoryReducer from "./category.reducer";

const combineReducer = () => {
     return combineReducers({
       Category:CategoryReducer
    })
}
export default combineReducer