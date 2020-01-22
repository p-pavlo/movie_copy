import React from 'react';
import * as C from '../constants';
import './ui.css';

export const Movies = props => {
  const { movies, goToDetails } = props;
  return (
    <div>
      <div className='movies-container'>
        {movies.map((movie, index) => {
          return (
            <div
              key={index}  
              className='item' 
              onClick={() => goToDetails(movie.id)}>
                <img src={`${C.BASE_IMG_URL}w200${movie.poster_path}`} alt={'Poster image'}/>
                <div className='movie-caption'>
                  {movie.title.toUpperCase()}{` [${movie.release_date.slice(0, 4)}]`}
                </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};