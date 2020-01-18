import React from 'react';
import PropTypes from 'prop-types';

const apiKey = 'ff26b7bd79df22c4392845e977dad089';
const moviesUrl = 'https://developers.themoviedb.org/3/movies/get-popular-movies' + '?api_key=' + apiKey;

const HomePage = props => {
  let response = fetch( moviesUrl, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Vary': 'Origin',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    }
  })
  .then(resp => console.log(resp))
  .catch(function(err) {
    console.log('Fetch problem: ' + err.message);
  }); 
  return <h1>{response.toString()}</h1>
}
  
  export default HomePage;
  
  HomePage.propTypes = {}; // ???
  
  HomePage.displayName = 'HomePage';