import React, { Component } from 'react';
import * as C from '../../constants';
import Details from './details';
import SimilarMovies from './similar-movies';
/////////////////////////////////////////////////////////////////

export default class MoviePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: null,
      details: null,
      detailsError: false,
      detailsLoading: false,
      similarMoviesError: false,
      similarMoviesLoading: false,
    };
    this.getData = this.getData.bind(this);
    this.goToDetails = this.goToDetails.bind(this);
    this.getDataRequest = this.getDataRequest.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getDetails(id) {
    fetch(`${C.BASE_URL}${id}${C.API_KEY}`)
    .then(res => res.json())
    .then(details => this.setState({
      details,
      detailsLoading: false,
    }))
    .catch(err => {
      this.setState({
        detailsError: true,
        detailsLoading: false,
      })
      console.log('Fetch problem (getDetails): ' + err.message);
    }) 
  }

  getSimilarMovies(id) {
    fetch(`${C.BASE_URL}${id}/similar${C.API_KEY}`)
    .then(res => res.json())
    .then(({ results }) => this.setState({
      movies: results,
      similarMoviesLoading: false,
     }))
    .catch(err => {
      this.setState({
        similarMoviesError: true,
        similarMoviesLoading: false,
      })
      console.log('Fetch problem (getSimilarMovies): ' + err.message);
    })
  }

  getDataRequest() {
    const { id } = this.props.match.params;
    this.getDetails(id);
    this.getSimilarMovies(id);
  }

  getData() {
    this.setState({ 
      detailsLoading: true,
      similarMoviesLoading: true,
    }, this.getDataRequest);
  }

  goToDetails(id) {
    window.location = `/movie/${id}`;
  }

  render() {
    const {
      movies,
      details,
      detailsError,
      detailsLoading,
      similarMoviesError,
      similarMoviesLoading } = this.state;
    return (
      <div>
        <Details
          data={details}
          error={detailsError}
          loading={detailsLoading} />
        <SimilarMovies
          movies={movies}
          error={similarMoviesError}
          goToDetails={this.goToDetails}
          loading={similarMoviesLoading} />
      </div>
    )
  }
};
