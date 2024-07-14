import { useState } from 'react'
import { useEffect } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import searchIcon from './search.svg'
import MovieCard from './MovieCard'

//32d0c950
const API_URL = 'https://www.omdbapi.com?apikey=32d0c950'

const movie1 = {
    "Title": "Batman Begins",
    "Year": "2005",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
}


const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  
  const searchMovies = async (title) => {
    const response =  await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  }
  useEffect(() => {
    searchMovies('batman');

  },[]);

  return (
  <div className="app">
    <h1>Movies Now</h1>
    <br></br>
    <div className="search">
      <input
        placeholder="Search for a movie..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <img
        src = {searchIcon}
        alt= "search"
        onClick = {() => searchMovies(searchTerm)}
      />

    </div>
    {movies?.length > 0
      ? (
        <div className = "container">
        {movies.map((movie) => (
          <MovieCard movie = {movie}/>
        ))}     
      </div>
      ) :(
        <div className='empty'>
          <h2>No Movies found!</h2>
        </div>
      )}
    <br></br>
    <div className = "container">
      <MovieCard movie = {movie1} />      
    </div>

  </div>
  )
}

export default App;
