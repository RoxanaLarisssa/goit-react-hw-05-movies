import percentCount from '../helples/percentCount';
import { Block, Div, Span, Title } from './MovieInfo.styled';

export const MovieInfo = ({ movieInfo }) => {
  const { poster_path, original_title, overview, vote_average, genres } =
    movieInfo;

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <Div>
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w300${poster_path}`
            : defaultImg
        }
        alt={original_title}
        width={500}
      />
      <Block>
        <h1 className="fw-bold" style={{ marginBottom: '15px' }}>
          {original_title}
        </h1>
        <span className="fw-bolder">
          User Score: {percentCount(vote_average)}%
        </span>
        <Title>
          Overview: <Span>{overview}</Span>{' '}
        </Title>
        <Title>Genres:</Title>
        <ul>
          {genres.map(({ name, id }) => (
            <li key={id}>
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </Block>
    </Div>
  );
};
