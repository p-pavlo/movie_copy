import React from 'react';
// styles
import './ui.css';

export const Movies = props => {
  const { movies, goToDetails } = props;
  return (
    <div className="container">
      {movies.map((movie, index) => {
        return (
          <div
            key={index}  
            className="item" 
            onClick={() => goToDetails(movie.id)}>
              {movie.title}
          </div>
        )
      })}
    </div>
  );
};
