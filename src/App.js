import logo from './logo.svg';
import './App.css';
import SearchIcon from './search.svg';
import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';

// 81b2c873

const API_URL = 'http://www.omdbapi.com?apikey=81b2c873';
const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');



   
  const searchMovies =  async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
    console.log(movies)

  };

    useEffect(() => {
      searchMovies('spiderman');


    }, []);


   

  return (
    <div className="app">
      <h1>MoviesHub</h1>
      <div className='search'>
        
        <input placeholder='Search for Movies' 
        value={searchTerm} 
        onChange={(e)=>{setSearchTerm(e.target.value);}}
        /> 
        <img src={SearchIcon} alt='' onClick={()=>{
     
            searchMovies(searchTerm);
        }} />

      </div>
      {
        movies.length > 0 ? (
          <div className='container'> 
           {
            movies.map((movie) => {
              return (
              <MovieCard movie={movie}/>
              )
        
            })
          }
    
          </div>
        ) : (
          <div className='empty'>
            <h3>There are no movies</h3>
          </div>
        )
      }
     

   
   </div>
  );
}

export default App;
