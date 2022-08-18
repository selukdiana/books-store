import React from 'react';
import { useSelector } from 'react-redux';
import { AdditionalList } from '../../components/additional-list';
import { BookBuy } from '../../components/book-buy';
import { BookCover } from '../../components/book-cover';
import { BookFavorite } from '../../components/book-favorite';
import { BookGenre } from '../../components/book-genre';
import { Rating } from '../../components/rating';
import {} from '../../store/types';
import { IBook } from '../../types';
import './book-page.css';

export const BookPage = () => {
  // const book = useSelector<IRootState, IBook | null>((state) => {
  //   console.log(state);
  //   return state.book.currentBook;
  // });

  const book: IBook = {
    image: 'https://itbook.store/img/books/9781642002140.png',
    isbn13: '9781642002140',
    price: '$23.02',
    title: 'Deno Succinctly',
    url: 'https://itbook.store/books/9781642002140',
    subtitle: 'Security in the Cloud',
    authors: 'Julien Vehent',
    publisher: 'Manning',
    isbn10: '1617294136',
    pages: '384',
    year: '2018',
    rating: '3',
    desc: "An application running in the cloud can benefit from incredible efficiencies, but they come with unique security threats too. A DevOps team's highest priority is understanding those risks and hardening the system against them.Securing DevOps teaches you the essential techniques to secure your cloud ...",
    pdf: {
      'Chapter 2': 'https://itbook.store/files/9781617294136/chapter2.pdf',
      'Chapter 5': 'https://itbook.store/files/9781617294136/chapter5.pdf',
    },
  };

  return !book ? null : (
    <div className="book-page">
      <h1 className="book-page__title">{book.title}</h1>
      <div className="book-page__content">
        {/* <div className="book-page__left">
          <iframe
            width="90%"
            height="400px"
            src={'#'}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div> */}
        <div className="book-page__left">
          <BookCover image={book.image} />
          <BookGenre genre={book.subtitle} key={book.subtitle} />
          <Rating rating={book.rating} />
          <div className="book-page__buy-book">
            <BookFavorite book={book} />
            <BookBuy book={book} />
          </div>
        </div>
        <div className="book-page__right">
          <AdditionalList book={book} />
        </div>
      </div>
      <div className="book-page__description">
        {book.desc}
      </div>
    </div>
  );
};
