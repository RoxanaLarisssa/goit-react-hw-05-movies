import { MovieList } from 'components/MovieList/MovieList';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getPopularMovies } from '../Service/api';

const Home = () => {
  const [movie, setMovie] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const getMovieReques = async () => {
      try {
        const response = await getPopularMovies();
        setMovie(response);
      } catch (error) {
        alert(error.message);
      }
    };
    getMovieReques();
  }, []);

  return (
    <div>
      {movie.length > 0 && <MovieList movies={movie} location={location} />}
    </div>
  );
};

export default Home;
