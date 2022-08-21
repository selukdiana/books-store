import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import {
  recieveDataBook,
  requestDataBook,
  recieveErrorBook,
} from '../../store/actions';
import { AnyAction } from 'redux';
import { IBook } from '../../types';

export const getBookThunk =
  (
    isbn13: string | undefined
  ): ThunkAction<Promise<void>, IBook, unknown, AnyAction> =>
  async (dispatch: ThunkDispatch<unknown, unknown, AnyAction>) => {
    dispatch(requestDataBook());
    fetch(`https://api.itbook.store/1.0/books/${isbn13}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch(recieveDataBook(data));
      })
      .catch((error) => dispatch(recieveErrorBook()));
  };
