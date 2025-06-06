import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { BookItem } from "../../components/BookItem";
import type { ISliderProps } from "../../types/props";
import type { Book } from "../../store/slices/bookSlice";
import "swiper/swiper-bundle.css";
import "./Slider.css";

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
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="slider"
      >
        {books.length > 0 ? <h2>Similar books</h2> : null}
        {books.map((book: Book) => (
          <SwiperSlide key={book.isbn13}>
            <BookItem book={book}></BookItem>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
