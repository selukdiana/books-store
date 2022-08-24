import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { recieveDataSearchBooks, recieveErrorSearchBooks, requestDataSearchBooks } from '../../store/actions';
import { AnyAction } from 'redux';
import { INewReleasesBooksState } from '../types';
import { Console } from 'console';

export const getSearchBooksThunk =
  (
    query: string | undefined,
    page: string
  ): ThunkAction<Promise<void>, INewReleasesBooksState, unknown, AnyAction> =>
    async (dispatch: ThunkDispatch<unknown, unknown, AnyAction>) => {
    console.log('SUB:  ', query)
    dispatch(requestDataSearchBooks())
    fetch(`https://api.itbook.store/1.0//search/${query}/${page}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch(recieveDataSearchBooks(data.books, data.total, data.page));
      }).catch((error) => {
        dispatch(recieveErrorSearchBooks())
      })
  };
