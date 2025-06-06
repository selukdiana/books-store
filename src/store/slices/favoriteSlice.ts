import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type Book } from "./bookSlice";

interface favoriteState {
  books: Book[];
  count: number;
}
const initialState: favoriteState = {
  books: [],
  count: 0,
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    setItemInFavorite(state, action: PayloadAction<Book>) {
      const book = action.payload;
      state.books.push(book);
      state.count++;
    },
    getItemFromFavorite(state, action: PayloadAction<string>) {
      const isbn13 = action.payload;
      state.books = state.books.filter((book) => book.isbn13 !== isbn13);
      state.count--;
    },
    clearFavorite(state) {
      state = initialState;
    },
  },
});

export default favoriteSlice.reducer;
export const { setItemInFavorite, getItemFromFavorite, clearFavorite } =
  favoriteSlice.actions;
