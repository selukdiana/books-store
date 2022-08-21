import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import {
  recieveDataNewReleasesBooks,
  recieveErrorNewReleasesBooks,
  requestDataNewReleasesBooks,
} from '../../store/actions';
import { AnyAction } from 'redux';
import { INewReleasesBooksState } from '../types';

export const getNewReleasesBooksThunk =
  (): ThunkAction<Promise<void>, INewReleasesBooksState, unknown, AnyAction> =>
  async (dispatch: ThunkDispatch<unknown, unknown, AnyAction>) => {
    dispatch(requestDataNewReleasesBooks());
    fetch('https://api.itbook.store/1.0/new')
      .then((response) => response.json())
      .then((data) => {
        dispatch(recieveDataNewReleasesBooks(data.books));
      })
      .catch((error) => {
        dispatch(recieveErrorNewReleasesBooks())
      });
  };
