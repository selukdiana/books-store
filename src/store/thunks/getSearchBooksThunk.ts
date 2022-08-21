import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { pushSearchBooks } from '../../store/actions';
import { AnyAction } from 'redux';
import { INewReleasesBooksState } from '../types';

export const getSearchBooksThunk =
  (
    query: string | undefined,
    page: string
  ): ThunkAction<Promise<void>, INewReleasesBooksState, unknown, AnyAction> =>
  async (dispatch: ThunkDispatch<unknown, unknown, AnyAction>) => {
    fetch(`https://api.itbook.store/1.0//search/${query}/${page}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        dispatch(pushSearchBooks(data.books, data.total, data.page));
      });
    //catch Action error
  };
