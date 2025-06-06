import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./slices/bookSlice";
import cartReducer from "./slices/cartSlice";
import favoriteReducer from "./slices/favoriteSlice";
import newReleasesBooksReducer from "./slices/newReleasesBooksSlice";
import searchReducer from "./slices/searchSlice";

const store = configureStore({
  reducer: {
    book: bookReducer,
    cart: cartReducer,
    favorite: favoriteReducer,
    newReleasesBooks: newReleasesBooksReducer,
    search: searchReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
