import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './EditorList.module.css';

const EditorList = ({ films }) => {
  const location = useLocation();

  return (
    <ul className={styles.editorListUl}>
      {films.map(film => (
        <li className={styles.editorListLi} key={film.id}>
          <Link
            className={styles.editorListLink}
            to={`/movies/${film.id}`}
            state={{ from: location }}
          >
            {film.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

EditorList.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default EditorList;
