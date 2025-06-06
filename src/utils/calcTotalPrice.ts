import type { Book } from "../store/slices/bookSlice";

export const calcTotalPrice = (items: Book[]) => {
  const prices = items.map((book) => parseFloat(book.price.substring(1)));

  const totalPrice: number = prices.reduce((prev: number, cur: number) => {
    return prev + cur;
  }, 0);

  return Number(totalPrice.toFixed(2));
};
