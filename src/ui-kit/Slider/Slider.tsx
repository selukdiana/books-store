import React from 'react';
import './Slider.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
import { IBook } from '../../types';
import { BookItem } from '../../components/BookItem';
import { ISliderProps } from '../../types/props';

export const Slider = ({ books }: ISliderProps) => {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          // when window width is >= 300px
          300: {
            slidesPerView: 1,
          },
          576: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        className="slider"
      >
        {books.length > 0 ? <h2>Similar books</h2> : null}
        {books.map((book: IBook) => (
          <SwiperSlide key={book.isbn13}>
            <BookItem book={book}></BookItem>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
