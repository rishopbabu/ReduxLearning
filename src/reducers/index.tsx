import { combineReducers } from "redux";
import stockReducer from "./stockReducers";

const rootReducer = combineReducers({
    stock: stockReducer
})

export default rootReducer;