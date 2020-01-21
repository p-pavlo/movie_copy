import React from 'react';
import { Error, Loader, Movies } from '../../components';

const SimilarMovies = (props) => {
  const { error, movies, loading, goToDetails } = props;
  if (loading) return <Loader />;
  if (error) return <Error text={'Similar movies Error'} />;
  if (!movies) return <div />;
  if (movies.length === 0) return <div>No similar movies</div>
  return <Movies movies={movies} goToDetails={goToDetails} />;
};

export default SimilarMovies;
