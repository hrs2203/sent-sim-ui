import { combineReducers, createStore, applyMiddleware } from "redux";
import { createLogger } from 'redux-logger'


// Actions
import { USER_ACTION } from "./UserModel";
import { WORLD_ACTION } from "./WebState";

// Reducers
import { UserReducer } from "./UserModel";
import { WorldReducer } from "./WebState";

const combinedStore = combineReducers({
    UserReducer, WorldReducer
})

export const ACTION_SET = { USER_ACTION, WORLD_ACTION };

const logger = createLogger({})

export default createStore(combinedStore, applyMiddleware(logger));