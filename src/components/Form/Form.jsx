import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Form.module.css';

const Form = ({ searchMovies }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    searchMovies(query.toLowerCase());
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <input
        className={styles.formInput}
        type="text"
        name="query"
        autoFocus
        value={query}
        onChange={handleInputChange}
      />
      <button className={styles.formBtn} type="submit">
        Search
      </button>
    </form>
  );
};

Form.propTypes = {
  searchMovies: PropTypes.func.isRequired,
};

export default Form;