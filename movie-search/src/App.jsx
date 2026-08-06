import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import ResultsList from './components/ResultsList';
import Pagination from './components/Pagination';

function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState(''); 

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=62aede51&s=${query}`);
        const data = await response.json();
        
        if (data.Response === "True") {
          setMovies(data.Search);
        } else {
          setMovies([]); 
        }
      } catch (error) {
        console.log("Xəta baş verdi: ", error); 
      }
    };


    const timerId = setTimeout(() => {
      if (query !== "") {
        getMovies();
      } else {
        setMovies([]);
      }
    }, 500); 


    return () => {
      clearTimeout(timerId);
    };

  }, [query]); 

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>🎬 Kino Axtarış</h1>
        <p>Axtardığınız filmi sürətlə tapın</p>
      </header>
      
      <main>
        <SearchBar query={query} setQuery={setQuery} />
        <ResultsList movies={movies} />
        <Pagination />
      </main>
    </div>
  );
}

export default App;