import { combineReducers } from "redux";
import loginReducer from "./loginReducers";

const rootReducer = combineReducers({
    auth: loginReducer
})

export default rootReducer;

