import React from 'react';
import * as C from '../../constants';
import { Error, Loader } from '../../components';

const Details = (props) => {
  const { data, error, loading } = props;
  if (loading) return <Loader />;
  if (error) return <Error text={'Details Error'} />;
  if (!data) return <div />;
  console.log('========', data, '========');
  return (
    <div>
      <h3 style={{textAlign:'center'}}>{`${data.title} (${data.release_date.slice(0, 4)})`}</h3>
      <p style={{float:'right'}}></p>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div>
          <img src={`${C.BASE_IMG_URL}w400${data.poster_path}`} alt={'Movie poster'}/>
        </div>
        <div>

        </div>
      </div>
      <h5>{`${data.vote_average} / 10 of ${data.vote_count}`}</h5>
      <table>
        <tbody>
          <tr>
            <th>Genres:</th>
            <td>{data.genres.map(({ name }) => name + ' ')}</td>
          </tr>
        </tbody>
      </table>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Details;
