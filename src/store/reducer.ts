const initialState = {
  books: [],
};

//actions
//{type:'PUSH_BOOKS', booksArray:[]}

export const rootReducer = (
  state = initialState,
  action: { type: any; booksArray: any }
) => {
  switch (action.type) {
    case 'PUSH_BOOKS':
      return Object.assign({ ...state }, { books: action.booksArray });
    default:
      return state;
  }
};
