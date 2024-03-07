import { useEffect, useState } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from 'service/TmbdApi';
import Loader from 'components/Loader/Loader';
import styles from './MovieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fetchMovieDetailsFilms = () => {
      setLoading(true);

      fetchMovieDetails(movieId)
        .then(detailMovie => {
          setMovieInfo(detailMovie);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchMovieDetailsFilms();
  }, [movieId]);

  if (!movieInfo) {
    return;
  }

  const {
    title,
    release_date,
    popularity,
    overview,
    genres,
    poster_path,
    original_title,
  } = movieInfo || {};

  return (
    <>
      <Link to={location.state?.from ?? '/'}>
        <button className={styles.movieDetailsBtn} type="button">
          Go back
        </button>
      </Link>
      {loading && <Loader />}

      {movieInfo && (
        <div className={styles.container}>
          <img
            width="300px"
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : `https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg`
            }
            alt={original_title}
          />
          <div>
            <h1>
              {title} ({release_date.slice(0, 4)})
            </h1>
            <p>User score: {popularity}</p>
            <h2>Overview</h2>
            <p>{overview}</p>
            <h2>Genres</h2>
            <ul className={styles.movieDetailsUl}>
              {genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
      <div className={styles.aditionalInfoContainer}>
        <h3>Additional information</h3>
        <ul className={styles.listInfo}>
          <li>
            <Link className={styles.movieDetailsLink} to="cast">
              Cast
            </Link>
          </li>
          <li>
            <Link className={styles.movieDetailsLink} to="reviews">
              Reviews
            </Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </>
  );
};

export default MovieDetails;
