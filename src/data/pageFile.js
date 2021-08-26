import { createSlice } from "@reduxjs/toolkit";

const PageSlice = createSlice({
    name: "pageChecker",
    initialState: {
        value: "Home"
    },
    reducers: {
        changePage: (state, action) => {
            console.log(action);
            state.value = action.payload;
        }
    }
})

export const { changePage } = PageSlice.actions;
export default PageSlice.reducer;