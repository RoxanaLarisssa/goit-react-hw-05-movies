import axios from 'axios';
import { transformMoviesData } from '../helples/transformCountriesData';

const API_KEY =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YzExY2RlYTcyMzc3YzAzNDU5ZWQzNmRjODQwNmZiNyIsInN1YiI6IjY1NmI2ZWEzODg2MzQ4MDBjOWUwZTZiZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Vwf_lNzH6GZMg2Sepu5F0CPoBSGG6cLt1TGM_pUkhAg';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.headers.common['Authorization'] = `Bearer ${API_KEY}`;

export const getPopularMovies = async () => {
  try {
    const { data } = await axios.get(`/trending/movie/day`);
    const movies = transformMoviesData(data);
    return movies;
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    throw error;
  }
};

export const getMovieById = async id => {
  const { data } = await axios.get(`movie/${id}`);
  return data;
};

export const getSearchMovie = async query => {
  const { data } = await axios.get(`/search/movie?query=${query}`);
  const movies = transformMoviesData(data);
  return movies;
};

export const getCast = async id => {
  const { data } = await axios.get(`/movie/${id}/credits`);
  return data;
};

export const fetchReviews = async id => {
  const { data } = await axios.get(`/movie/${id}/reviews`);
  return data;
};
