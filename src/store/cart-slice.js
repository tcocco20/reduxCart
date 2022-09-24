import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  isOpen: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cartItems.push(action.payload);
    },
    removeFromCart(state, action) {
      state.cartItems.filter()
    },
    toggleCart(state) {},
    increaseQuantity(state, action) {},
    decreaseQuantity(state, action) {},
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
