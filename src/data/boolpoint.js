import { createSlice } from "@reduxjs/toolkit";

const boolSlice = createSlice({
    name: "bool_slice",
    initialState: {
        value: false
    },
    reducers: {
        flipBit: state => {
            state.value = !state.value
        }
    }
})

export const { flipBit } = boolSlice.actions;
export default boolSlice.reducer;