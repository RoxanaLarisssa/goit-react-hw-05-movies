import Header from 'components/Header/Header';
import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router';

const Home = lazy(() => import('../Pages/Home'));
const Movie = lazy(() => import('../Pages/Movie/Movie'));
const MovieSearch = lazy(() => import('../Pages/MoviesSearch/MoviesSearch'));
const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movie />} />
          <Route path="/movies/:movieId" element={<MovieSearch />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to={'/'} />} />
        </Route>
      </Routes>
    </div>
  );
};
