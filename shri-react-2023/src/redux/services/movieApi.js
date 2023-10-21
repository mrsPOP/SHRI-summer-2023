import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const movieApi = createApi({
  reducerPath: "movie",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api/" }),
  endpoints: (builder) => ({
    getMovies: builder.query({ query: () => "movies" }),
    getMovie: builder.query({ query: (movieId) => `movie?movieId=${movieId}` }),
    getCinemas: builder.query({ query: () => "cinemas" }),
    getMoviesInCinema: builder.query({
      query: (cinemaId) => `movies?cinemaId=${cinemaId}`,
    }),
    getReviews: builder.query({ query: () => "reviews" }),
    getMovieReviews: builder.query({ query: (movieId) => `reviews?movieId=${movieId}` }),
  }),
});

export const {
  useGetMoviesQuery,
  useGetMovieQuery,
  useGetCinemasQuery,
  useGetMoviesInCinemaQuery,
  useGetReviewsQuery,
  useGetMovieReviewsQuery
} = movieApi;
