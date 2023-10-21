'use client'

import Image from "next/image";
import { FunctionComponent } from "react";
import "./styles/film-page.scss"

interface Props {
  title: string;
  posterUrl: string;
  releaseYear: number;
  description: string;
  genre: string;
  rating: number;
  director: string;
}

const FilmPage: FunctionComponent<Props> = (props: Props) => {
  return (
    <article className="film-page">
      <Image
        src={props.posterUrl}
        alt={props.title}
        width={400}
        height={500}
        className="film-page__image"
      />
      <div className="film-page__info">
        <div className="film-page__title-and-counter-wrapper">
          <h1 className="film-page__title">{props.title}</h1>
          <div className="film-page__count-wrapper">
            <button
              aria-label="decrement"
              className="film-page__button film-page__button_decrement"
            ></button>
            <p className="film-page__ticket-number">1</p>
            <button
              aria-label="increment"
              className="film-page__button film-page__button_increment"
            ></button>
          </div>
        </div>
        <div className="film-page__about-section">
          <p className="film-page__about-section-item">
            <span className="film-page__about-section-item film-page__about-section-item_bold">Жанр: </span>{props.genre}
          </p>
          <p className="film-page__about-section-item">
            <span className="film-page__about-section-item film-page__about-section-item_bold">Год выпуска: </span>{props.releaseYear}
          </p>
          <p className="film-page__about-section-item">
            <span className="film-page__about-section-item film-page__about-section-item_bold">Рейтинг: </span>{props.rating}
          </p>
          <p className="film-page__about-section-item">
            <span className="film-page__about-section-item film-page__about-section-item_bold">Режиссер: </span>{props.director}
          </p>
        </div>
        <div className="film-page__description-wrapper">
          <h2 className="film-page__description-title">Описание</h2>
          <p className="film-page__description-text">{props.description}</p>
        </div>
      </div>
    </article>
  );
};

export default FilmPage;
