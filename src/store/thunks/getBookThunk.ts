import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import {
  recieveDataNewReleasesBooks,
  setCurrentBook,
} from '../../store/actions';
import { AnyAction } from 'redux';
import { INewReleasesBooksState } from '../types';
import { IBook } from '../../types';

export const getBookThunk =
  (
    isbn13: string | undefined
  ): ThunkAction<Promise<void>, IBook, unknown, AnyAction> =>
  async (dispatch: ThunkDispatch<unknown, unknown, AnyAction>) => {
    fetch(`https://api.itbook.store/1.0/books/${isbn13}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        dispatch(setCurrentBook(data));
      });
    //catch Action error
  };
