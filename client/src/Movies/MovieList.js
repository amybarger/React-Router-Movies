import React from 'react';


const MovieList = props => {
  return (
    <div className="movie-list">
      {props.movie.map(movies => {
        return (
        <MovieDetails key={movies.id} movies={movies} )})}
    </div>
  );
}

function MovieDetails({ movies }) {
  const { title, director, metascore, stars } = movies;
  return (
    <div className="movie-card">
      <h2>{title.movies}</h2>
      <div className="movie-director">
        Director: <em>{director.movies}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore.movies}</strong>
      </div>
      <h3>Actors</h3>

      {stars.map(star => (
        <div key={star.movies} className="movie-star">
          {star.movies}
        </div>
      ))}
    </div>
  );
}

export default MovieList;
