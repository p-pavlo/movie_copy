import React from 'react';
import * as C from '../../constants';
import { Error, Loader } from '../../components';

const Details = (props) => {
  const { data, error, loading } = props;
  if (error) return <Error text={'Details Error'} />;
  if (!data) return <div />;
  console.log('========', data, '========');
  return (
    <div>
      <h1 className='title'>
        {`${data.title} [${data.release_date.slice(0, 4)}]`}
      </h1>
      <div className='details-container'>
        {loading && <Loader />}
        <div className='image-container'>
          <img src={`${C.BASE_IMG_URL}w400${data.poster_path}`} alt={'Poster image'}/>
        </div>
        <div>
          <div className='info-container'>
            <h4>Rating:</h4>
            <p>{`${data.vote_average} / 10 of ${data.vote_count}`}</p>
            <h4>Overview:</h4>
            <p>{data.overview}</p>
            <h4>Genres:</h4>
            <p>{data.genres.map(({ name }) => name).join(', ')}</p>
            <h4>Cast:</h4>
            <p>{data.credits.cast.map(({ name }) => name ).slice(0, 3).join(', ')}</p>
            <h4>Runtime:</h4>
            <p>{`${data.runtime} min.`}</p>
            <br />
            <h3><i>{`${data.tagline}`}</i></h3>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
