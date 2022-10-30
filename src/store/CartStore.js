import { APIService } from 'utils/service';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getCartAsync = createAsyncThunk('cartStore/getCartAsync', async () => {
  const response = await APIService.get('cart')
  return response.data
})

export const storeCartAsync = createAsyncThunk('cartStore/storeCartAsync', async (product) => {
  await APIService.post('cart', product)
  return product
})

const initialState = {
  cart: [],
  loading: false,
}

export const cartStore = createSlice({
  name: "cartStore",
  initialState: {
    ...initialState
  },
  reducers: {
    setCart: (state, action) => {
      state.cart = action.payload
    },
    addToCart: (state, action) => {
      const product = action.payload;
      const item = state.cart.find((item) => item.id === product.id);
      if (item) {
        item.quantity++;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.cart = state.cart.filter((item) => item.id !== productId);
    },
    clearCart: (state) => {
      state.cart = [];
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getCartAsync.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getCartAsync.fulfilled, (state, action) => {
      state.loading = false;
      state.cart = action.payload;
    });
    builder.addCase(getCartAsync.rejected, (state, action) => {
      state.loading = false;
    });
    builder.addCase(storeCartAsync.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(storeCartAsync.fulfilled, (state, action) => {
      state.loading = false;
      state.cart.push(action.payload);
    });
    builder.addCase(storeCartAsync.rejected, (state, action) => {
      state.loading = false;
    });
  }
});

export const { setCart, addToCart, removeFromCart, clearCart } = cartStore.actions;
export const getCart = (state) => state.cartStore.cart;
export default cartStore.reducer;