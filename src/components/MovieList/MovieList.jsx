import { Link } from 'react-router-dom';

export const MovieList = ({ movies, location }) => {
  return (
    <ul>
      {movies.map(({ id, name, poster_path }) => {
        const defaultImg =
          'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

        return (
          <li
            className="border w- p-3 border-success p-2 mb-2 border-opacity-25"
            key={id}
          >
            <Link
              className="text-xxl-end text-body-secondary"
              to={`/movies/${id}`}
              state={{ from: location }}
            >
              <img
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                    : defaultImg
                }
                alt={name}
                width={200}
              />
              {name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
