import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route } from "react-router-dom";
import MovieList from "./Movies/MovieList"
import Movie from "./Movies/Movie"

import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState([]);
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovieList(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />
    
    <div>
      <Route exact path="/" component={MovieList}></Route>
      <Route path="/movies/:id" component={Movie}></Route>
    </div>
    </div> 
    
  );
};

export default App;
