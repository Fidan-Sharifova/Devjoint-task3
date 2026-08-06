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
        const response = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=62aede51&s=${query}`);
        const data = await response.json();
        
        console.log("API-dən gələn cavab: ", data);
        
        if (data.Response === "True") {
          setMovies(data.Search);
        } else {
          setMovies([]); 
        }
      } catch (error) {
        console.log("Xəta baş verdi: ", error); 
      }
    };

    if (query !== "") {
      getMovies();
    } else {
      setMovies([]);
    }
  }, [query]); 

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>🎬 Kino Axtarış</h1>
        <p>Axtardığınız filmi sürətlə tapın</p>
      </header>
      
      <main>
        <SearchBar query={query} setQuery={setQuery} />
        
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <h3>Test Nəticəsi:</h3>
          <p>Tapılan film sayı (Ekranda): <strong>{movies.length}</strong></p>
        </div>

        <ResultsList movies={movies} />
        <Pagination />
      </main>
    </div>
  );
}

export default App;