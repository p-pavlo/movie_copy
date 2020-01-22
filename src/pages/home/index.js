import React, { Component } from 'react';
import '../../components/ui.css';
import * as C from '../../constants';
import { Error, Loader, Movies, EmptyList } from '../../components';

export default class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: null,
      error: false,
      loading: false,
    };
    this.refresh = this.refresh.bind(this);
    this.getMovies = this.getMovies.bind(this);
    this.goToDetails = this.goToDetails.bind(this);
  }

  componentDidMount() {
    this.refresh();
  }

  getMovies() {
    fetch(C.endpoints.popularMoviesUrl)
    .then(res => res.json())
    .then(({ results }) => this.setState({
      error: false,
      loading: false,
      movies: results || [],
    }))
    .catch(err => {
      this.setState({
        error: true,
        loading: false,
      })
      console.log('Fetch problem (getMovies): ' + err.message);
    }) 
  }

  refresh() {
    this.setState({ loading: true }, this.getMovies);
  }

  goToDetails(id) {
    window.location = `/movie/${id}`;
  }

  render() {
    const { movies, error, loading } = this.state;
    if (error) return <Error />;
    if (!movies) return <div />;
    if (movies.length === 0) return <EmptyList />;
    return (
      <div className='relative-container'>
        {loading && <Loader />}
        <h2 className="title">Popular movies</h2>
        <Movies movies={movies} goToDetails={this.goToDetails} />
      </div>
    )
  }
};
