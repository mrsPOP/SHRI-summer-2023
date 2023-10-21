import { createSlice } from "@reduxjs/toolkit";

const initialState = {amount: 0};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state, { payload }) => {
      const count = state[payload] || 0;
      state[payload] = count + 1;
      state.amount += 1;
    },
    decrement: (state, { payload }) => {
      const count = state[payload];

      if (!count) {
        return;
      }

      if (count === 1) {
        delete state[payload];
        state.amount -= 1;
        return;
      }

      state[payload] = count - 1;
      state.amount -= 1;
    },
    reset: (state, { payload })  => {
      const count = state[payload] || 0;
      state.amount -= count;
      delete state[payload];
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
