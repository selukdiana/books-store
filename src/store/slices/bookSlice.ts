import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";

export interface Book {
  image: string;
  isbn13: string;
  price: string;
  title: string;
  url: string;
  subtitle: string;
  authors?: string;
  publisher?: string;
  isbn10?: string;
  pages?: string;
  year?: string;
  rating?: string;
  desc?: string;
  pdf?: any;
}
interface BookState {
  currentBook: Book | null;
  isFetching: boolean;
  isError: boolean;
}
const initialState: BookState = {
  currentBook: null,
  isError: false,
  isFetching: false,
};

export const getBook = createAsyncThunk(
  "book/getBook",
  async (isbn13: string | undefined) => {
    const response = await fetch(
      `https://api.itbook.store/1.0/books/${isbn13}`
    );
    const data = await response.json();
    return data;
  }
);

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBook.pending, (state) => {
      state.isFetching = true;
    });
    builder.addCase(getBook.fulfilled, (state, action: PayloadAction<Book>) => {
      state.currentBook = action.payload;
      state.isFetching = false;
    });
    builder.addCase(getBook.rejected, (state) => {
      state.isError = true;
      state.isFetching = false;
    });
  },
});

export default bookSlice.reducer;
