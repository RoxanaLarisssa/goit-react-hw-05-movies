import { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieById } from 'components/Service/api';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { Btn, Title } from './MoviesSearch.styled';

const MovieSearch = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);
  const location = useLocation();

  const backLinkRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const fetchMovie = async () => {
      const resultMovie = await getMovieById(movieId);
      try {
        setMovieInfo(resultMovie);
      } catch (error) {
        alert('Error fetching movie details');
      }
    };

    fetchMovie();
  }, [movieId]);

  return (
    <>
      {movieInfo && (
        <div>
          <Btn
            className="btn btn-primary btn-lg text-black-50 bg-white"
            type="button"
          >
            <Link to={backLinkRef.current}>Go back</Link>
          </Btn>
          <MovieInfo movieInfo={movieInfo} />
          <Title>Additional information</Title>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
          <Outlet />
        </div>
      )}
    </>
  );
};

export default MovieSearch;
