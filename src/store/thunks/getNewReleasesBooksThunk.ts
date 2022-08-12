import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { pushBooks } from '../../store/actions';
import { AnyAction } from 'redux';
import { IState } from '../types';

export const getNewReleasesBooksThunk =
  (): ThunkAction<Promise<void>, IState, unknown, AnyAction> =>
  async (dispatch: ThunkDispatch<unknown, unknown, AnyAction>) => {
    fetch('https://api.itbook.store/1.0/new')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        dispatch(pushBooks(data.books));
      });
    //catch Action error
  };
