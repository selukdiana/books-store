import {IBook} from '../types'

export const pushBooks = (booksArray: Array<IBook>) => {
  return { type: 'PUSH_BOOKS', booksArray};
}