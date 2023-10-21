"use client";

import Film from "../Film";
import film from "../Film/film";
import './styles/filmlist.scss'

interface filmItem {
  films: film[],
  haveDeleteButton?: boolean;
}

const FilmList = ({
  films,
  haveDeleteButton = false,
}: filmItem) => {
  const tickets = films.map((film) => {
    return (
      <Film
        id={film.id}
        title={film.title}
        genre={film.genre}
        posterUrl={film.posterUrl}
        key={film.id}
        haveDeleteButton={haveDeleteButton}
      />
    );
  });
  return (
    <ul className="filmlist">
      {...tickets}
    </ul>
  );
}
export default FilmList;
