import React from 'react';
import { Link } from "react-router-dom";


const MovieList = props => {
  console.log("movielist props", props.movie)
  return (
    <div className="movie-list">
      {props.movie.map(movies => {
        return( 
        <Link to={`/movies/${movies.id}`}><MovieDetails key={movies.id} movies={movies} /> </Link>
      )})} 
    </div>
  );
}

function MovieDetails({ movies }) {
  const { title, director, metascore, stars } = movies;
  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>

      {stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
    </div>
  );
}

export default MovieList;
