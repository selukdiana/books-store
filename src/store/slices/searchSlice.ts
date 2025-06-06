import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import { type Book } from "./bookSlice";

interface serachState {
  books: Book[];
  total: string;
  page: string;
  isFetching: boolean;
  isError: boolean;
}
const initialState: serachState = {
  books: [],
  total: "0",
  page: "1",
  isFetching: false,
  isError: false,
};

export const getSearchBooks = createAsyncThunk(
  "search/getSearchBooks",
  async ({ query, page }: { query: string | undefined; page: string }) => {
    const response = await fetch(
      `https://api.itbook.store/1.0//search/${query}/${page}`
    );
    const data = await response.json();
    return data;
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSearchBooks.pending, (state) => {
      state.isFetching = true;
      state.isError = false;
    });
    builder.addCase(
      getSearchBooks.fulfilled,
      (
        state,
        action: PayloadAction<{
          books: Book[];
          page: string;
          total: string;
          error: string;
        }>
      ) => {
        debugger;
        const { books, total, page } = action.payload;
        state.books = books;
        state.total = total;
        state.page = page;
        state.isError = false;
        state.isFetching = false;
      }
    );
    builder.addCase(getSearchBooks.rejected, (state) => {
      state.isError = true;
      state.isFetching = false;
    });
  },
});

export default searchSlice.reducer;
