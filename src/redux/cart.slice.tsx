import { createSlice } from '@reduxjs/toolkit';

export const loadState = (state: any) => {
  try {
    const serializedState = localStorage.getItem(state);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};
const getInitialState = () => {
  if (loadState(`state`)) {
    return loadState(`state`);
  } else {
    return [];
  }
};

const cartSlice = createSlice({
  name: `cart`,
  initialState: getInitialState(),
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
