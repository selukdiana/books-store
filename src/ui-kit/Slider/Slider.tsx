import React from 'react';
import './slider.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
import { IBook } from '../../types';
import { BookItem } from '../../components/book-item';

export interface ISliderProps {
  books: Array<IBook> | [];
}

export const Slider = ({ books }: ISliderProps) => {
  console.log('slider');
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      breakpoints={{
        // when window width is >= 640px
        300: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 2,
        },
        // when window width is >= 768px
        1200: {
          slidesPerView: 3,
        },
      }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className="slider"
    >
      {books.map((book: IBook) => (
        <SwiperSlide>
          <BookItem book={book} key={book.isbn13}></BookItem>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
