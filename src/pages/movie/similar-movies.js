import React from 'react';
import { Error, Loader, Movies } from '../../components';
import '../../components/ui.css';

const SimilarMovies = (props) => {
  const { error, movies, loading, goToDetails } = props;
  if (error) return <Error text={'Similar movies Error'} />;
  if (!movies) return <div />;
  if (movies.length === 0) return <div>No similar movies</div>
  return (
    <div className='relative-container'>
      {loading && <Loader />}
      <h2 className='title'>Similar movies</h2>
      <Movies movies={movies} goToDetails={goToDetails} />
    </div>
  )
};

export default SimilarMovies;
