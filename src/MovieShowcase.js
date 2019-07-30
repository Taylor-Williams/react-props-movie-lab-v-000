import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return the correct
    return (
      <div className='movie-showcase'>
        {movieData.map((movie) => <MovieCard title={movie.title} rating={movie.IMDBRating} genresarray={movie.genres} poster={movie.poster} />}
      </div>
    )
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
