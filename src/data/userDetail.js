import { createSlice } from "@reduxjs/toolkit";

const userDetail = createSlice({
    name: "userDetail",
    initialState: {
        value: undefined
    },
    reducers: {
        login_user : (state, action) => {
            state.value = action.payload;
        },
        logout_user : (state) => {
            state.value = undefined;
        }
    }
})

export const { login_user, logout_user } = userDetail.actions;
export default userDetail.reducer;