import React, { useEffect, useState } from 'react';
import EditorList from 'pages/EditorList/EditorList';
import { fetchTrending } from 'service/TmbdApi';
import Loader from 'components/Loader/Loader';
import styles from './Home.module.css';

const Home = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTrendingFilms = () => {
      setLoading(true);

      fetchTrending()
        .then(trendingFilms => {
          setFilms(trendingFilms);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchTrendingFilms();
  }, []);

  return (
    <main>
      <h1 className={styles.homeTitle}>Trending movies for today</h1>
      <EditorList films={films} />

      {loading && <Loader />}
    </main>
  );
};

export default Home;
