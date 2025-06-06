import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import { type Book } from "./bookSlice";

interface newReleasesBooksState {
  books: Book[];
  isFetching: boolean;
  isError: boolean;
}
const initialState: newReleasesBooksState = {
  books: [],
  isFetching: false,
  isError: false,
};

export const getNewReleasesBooks = createAsyncThunk(
  "newReleasesBooks/getNewReleasesBooks",
  async () => {
    const response = await fetch("https://api.itbook.store/1.0/new");
    const data = await response.json();
    return data;
  }
);
const newReleasesBooksSlice = createSlice({
  name: "newReleasesBooks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getNewReleasesBooks.pending, (state) => {
      state.isFetching = true;
    });
    builder.addCase(
      getNewReleasesBooks.fulfilled,
      (
        state,
        action: PayloadAction<{ books: Book[]; error: string; total: string }>
      ) => {
        const books = action.payload.books;
        state.books = books;
        state.isFetching = false;
      }
    );
    builder.addCase(getNewReleasesBooks.rejected, (state) => {
      state.isFetching = false;
      state.isError = true;
    });
  },
});

export default newReleasesBooksSlice.reducer;
