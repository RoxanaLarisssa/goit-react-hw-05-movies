import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from '../Service/api';
import { Ul } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  useEffect(() => {
    if (!movieId) return;
    const getCastMovie = async () => {
      try {
        const resultMovie = await getCast(movieId);
        if (resultMovie.cast === 0) {
          alert('No cast information available');
          return;
        }
        setCast(resultMovie.cast);
      } catch (error) {
        alert(error.message);
      }
    };

    if (movieId) {
      getCastMovie();
    }
  }, [movieId]);

  const toggleImg = origImg => {
    const imageUrl = origImg
      ? `https://image.tmdb.org/t/p/w500${origImg}`
      : defaultImg;
    return imageUrl;
  };

  return (
    <>
      {cast.length >= 0 ? (
        <Ul>
          {cast.map(({ original_name, character, profile_path, id }) => (
            <li key={id}>
              <img src={toggleImg(profile_path)} alt={original_name} />
              <h1>{original_name}</h1>
              <h2>{character}</h2>
            </li>
          ))}
        </Ul>
      ) : (
        <p>No cast information available.</p>
      )}
    </>
  );
};

export default Cast;
