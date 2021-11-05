import { createStore } from "redux";
import { combineReducers } from "redux";

// Actions
import { USER_ACTION } from "./UserModel";

// Reducers
import { UserReducer } from "./UserModel";

const combinedStore = combineReducers({
    UserReducer
})

export const ACTION_SET = { USER_ACTION };

export default createStore(combinedStore);