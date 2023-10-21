'use client';

import FilmPage from "@/components/FilmPage";
import ReviewList from "@/components/ReviewList";
import { useGetMovieQuery, useGetMovieReviewsQuery } from "@/redux/services/movieApi";

interface MovieProps {
  params: {
    id: string;
  };
}

export default function MoviePage(props: MovieProps) {
  const movie = useGetMovieQuery(props.params.id);
  const reviews = useGetMovieReviewsQuery(props.params.id);

  return (
    <div>
      {movie.isSuccess && <FilmPage {...movie.data} />}
      {reviews.isSuccess && <ReviewList reviews={reviews.data} />}
    </div>
  );
}