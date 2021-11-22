import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state: any, action) => {
      const itemExists = state.find(
        (item: any) => item.id === action.payload.id,
      );
      if (itemExists) {
        itemExists.quantity++;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state: any, action) => {
      const item = state.find((item: any) => item.id === action.payload);
      if (item.quantity < 20) {
        item.quantity++;
      }
    },
    decrementQuantity: (state: any, action) => {
      const item = state.find((item: any) => item.id === action.payload);
      if (item.quantity > 0) {
        item.quantity--;
      }
    },
    removeFromCart: (state, action) => {
      const index = state.findIndex((item: any) => item.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const cartReducer = cartSlice.reducer;

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} = cartSlice.actions;
