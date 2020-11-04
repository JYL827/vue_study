import { fetchMovieList } from '../api/movie.js'

export async function getMovieSection(movie_key) {
  let s = {}
  await fetchMovieList(movie_key, params).then(function() {
    s.type = movie_key
    s.movies = res
  })
  return s
}