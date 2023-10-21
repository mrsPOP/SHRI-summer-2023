"use client";

import Image from "next/image";
import "./styles/film.scss";
import { FunctionComponent, useState } from "react";
import { useRouter } from "next/navigation";
import { cartActions } from "@/redux/features/cart";
import { selectProductAmount } from "@/redux/features/cart/selector";
import { useDispatch, useSelector } from "react-redux";
import Popup from "../Popup";

interface Props {
  id: string;
  title: string;
  genre: string;
  posterUrl: string;
  haveDeleteButton: boolean;
}

const Film: FunctionComponent<Props> = (props: Props) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleDeleteClick = () => {
    setOpen(true);
  };
  const Product = () => {
    const amount = useSelector((state) => selectProductAmount(state, props.id));
    return <p className="film__ticket-number">{amount}</p>;
  };
  return (
    <li className="film-item">
      <article className="film">
        <Image
          src={props.posterUrl}
          alt={props.title}
          width={100}
          height={120}
          className="film__picture"
          onClick={() => router.push(`/movie/${props.id}`)}
        />
        <div className="film__info-wrapper">
          <p className="film__title" onClick={() => router.push(`/movie/${props.id}`)}>{props.title}</p>
          <p className="film__genre">{props.genre}</p>
        </div>
        <div className="film__count-wrapper">
          <button
            aria-label="decrement"
            className="film__button film__button_decrement"
            onClick={() => dispatch(cartActions.decrement(props.id))}
          ></button>
          <Product />
          <button
            aria-label="increment"
            className="film__button film__button_increment"
            onClick={() => dispatch(cartActions.increment(props.id))}
          ></button>
        </div>
        {props.haveDeleteButton && (
          <button aria-label="delete" className="film__delete-button" onClick={handleDeleteClick}>
          </button>
        )}
        {open && <Popup id={props.id} onClose={() => setOpen(false)} />}
      </article>
    </li>
  );
};

export default Film;
