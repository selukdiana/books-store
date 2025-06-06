import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type Book } from "./bookSlice";

interface cartState {
  books: Book[];
  count: number;
}
const initialState: cartState = { books: [], count: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setItemInCart(state, action: PayloadAction<Book>) {
      const book = action.payload;
      state.books.push(book);
      state.count++;
    },
    getItemFromCart(state, action: PayloadAction<string>) {
      const isbn13 = action.payload;
      state.books = state.books.filter((book) => book.isbn13 !== isbn13);
      state.count--;
    },
    clearCart(state) {
      state = initialState;
    },
  },
});

export default cartSlice.reducer;
export const { setItemInCart, getItemFromCart, clearCart } = cartSlice.actions;
