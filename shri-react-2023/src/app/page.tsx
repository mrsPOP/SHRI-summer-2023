"use client";

import { useState } from 'react';
import './home.scss'
import FilmList from "@/components/FilmList";
import Filters from "@/components/Filters";
import Film from '@/components/Film/film';
import {useGetMoviesQuery, useGetCinemasQuery, useGetMoviesInCinemaQuery } from '../redux/services/movieApi'

interface Cinema {
  id: string;
  name: string;
  movieIds: string[];
}

export default function Home() {
  const [title, setTitle] = useState<string>('');
  const [genre, setGenre] = useState<string>('');
  const [cinema, setCinema] = useState<string>('');

  const resMovies = useGetMoviesQuery(null);
  const resCinemas = useGetCinemasQuery(null);
  const resCinemaById = useGetMoviesInCinemaQuery(cinema);

  const { data, isLoading, error } = useGetMoviesQuery(null);

  if (resMovies.isLoading || resCinemas.isLoading || resCinemaById.isLoading) {
    return <span>Loading...</span>;
  }

  let movies: Film[] = resMovies.data;
  const cinemas: Cinema[] = resCinemas.data;

  const genreOptions = Array.from(new Set(movies.map((movie) => movie.genre))).map((item) => ({ name: item }));
  const cinemaOptions = cinemas.map((cinema) => {return {name: cinema.name, id: cinema.id}});
  if (cinema) {
    movies = resCinemaById.data;
  }
  if (genre) {
    movies = movies.filter((movie: Film) => movie.genre === genre);
  }
  if (title) {
    movies = movies.filter((movie: Film) =>
      movie.title.toLowerCase().includes(title.toLowerCase())
    );
  }

  if (!data || error) {
    return <span>NotFound</span>;
  }
  
  return (
      <div className="home">
        <Filters 
          inputOnChange={setTitle}
          genreOnChange={setGenre}
          genreOptions={genreOptions}
          cinemaOnChange={setCinema}
          cinemaOptions={cinemaOptions}
        />
        <div className="home__tickets">
          <FilmList films={movies}/>
        </div>
      </div>
  );
}
