import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter_1",
    initialState: {
        value: 1
    },
    reducers: {
        increment: state => {
            state.value += 1;
        },
        decrement: state => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        }
    }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer;