"use client";

import Container from "@/components/Container";
import { useSelector } from "react-redux";
import { selectCartModule } from '@/redux/features/cart/selector';
import './cart.scss'
import FilmList from "@/components/FilmList";
import Film from "@/components/Film/film";
import { useGetMoviesQuery } from "@/redux/services/movieApi";

export default function Cart () {
  const cart = useSelector((state) => selectCartModule(state));
  const { data, isLoading } = useGetMoviesQuery(null);

  if (isLoading) return <span>Loading...</span>;

  const tickets = data.filter((movie: Film) => {
    return movie.id in cart;
  });
  return (
      <div className="cart">
      {tickets.length !== 0 ? <FilmList haveDeleteButton={true} films={tickets} /> : <span>
        Корзина пуста</span>}
        <Container ticketNumber={cart.amount}/>
      </div>
  );
}