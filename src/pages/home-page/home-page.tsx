import React, { useState, useEffect } from 'react';
import './home-page.css';
import { BookItem } from '../../components/book-item';
import { useDispatch, useSelector } from 'react-redux';
import { pushBooks } from '../../store/actions';
import { IState } from '../../store/types';
import { IBook } from '../../types';
import { getNewReleasesBooksThunk } from '../../store/thunks/getNewReleasesBooksThunk';

export const HomePage = () => {
  const dispatch = useDispatch<any>();
  const books = useSelector<IState, Array<IBook>>((state) => state.books);

  useEffect(() => {
    // fetch('https://api.itbook.store/1.0/new')
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //     dispatch(pushBooks(data.books));
    //   });

    dispatch(getNewReleasesBooksThunk());

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);
  return (
    <div className="home-page">
      {/* {books.map((book: IBook) => (
        <BookItem book={book} key={book.isbn13} />
      ))} */}

      <BookItem
        book={{
          image: 'https://itbook.store/img/books/9781642002140.png',
          isbn13: '9781642002140',
          price: '$23.02',
          subtitle: '',
          title: 'Deno Succinctly',
          url: 'https://itbook.store/books/9781642002140',
        }}
        key={1}
      ></BookItem>
    </div>
  );
};

//https://api.itbook.store/1.0/new
