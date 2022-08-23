import { combineReducers } from 'redux';
import { bookReducer } from './bookReducer';
import { cartReducer } from './cartReducer';
import { favoriteReducer } from './favoriteReducer';
import { newReleasesBooksReducer } from './newReleasesBooksReducer';
import { searchReducer } from './searchReducer';

export const rootReducer = combineReducers({
  book: bookReducer,
  newReleases: newReleasesBooksReducer,
  cart: cartReducer,
  favorite: favoriteReducer,
  search: searchReducer,
});
