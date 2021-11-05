import { createStore } from "redux";
import { combineReducers } from "redux";

import { UserReducer } from "./UserModel";

const combinedStore = combineReducers({
    UserReducer
})

export default createStore(combinedStore);