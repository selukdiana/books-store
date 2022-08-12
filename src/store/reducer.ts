import { IState } from './types';
import { AnyAction } from 'redux';

const initialState: IState = {
  books: [],
};

//actions
//{type:'PUSH_BOOKS', booksArray:[]}

export const rootReducer = (
  state = initialState,
  action: AnyAction
): IState => {
  switch (action.type) {
    case 'PUSH_BOOKS':
      return Object.assign({ ...state }, { books: action.booksArray });
    default:
      return state;
  }
};
