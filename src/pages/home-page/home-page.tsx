import React, { useState, useEffect } from 'react';
import './home-page.css';
import { BookItem } from '../../components/book-item';
import { useDispatch, useSelector } from 'react-redux';
import { pushBooks } from '../../store/actions';
import { IState } from '../../store/types';
import {IBook} from '../../types'


export const HomePage = () => {
  const dispatch = useDispatch();
  const books:any = useSelector<IState, Array<IBook>>((state) => state.books);

  useEffect(() => {
    fetch('https://api.itbook.store/1.0/new')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        dispatch(pushBooks(data.books));
      });

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);
  return (
    <div className="home-page">
      {books.map((book:IBook) => (
        <BookItem book={book} key={book.isbn13} />
      ))}
    </div>
  );
};

//https://api.itbook.store/1.0/new
