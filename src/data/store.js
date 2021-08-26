import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./counterSlice.js";
import boolReducer from './boolpoint.js';
import pageReducer from './pageFile.js';
import userDetail from './userDetail.js';

export default configureStore({ 
    reducer: {
        page: pageReducer,
        counter: counterReducer,
        boolRed: boolReducer,
        userDetail: userDetail
    } 
})