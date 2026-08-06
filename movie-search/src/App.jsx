import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import ResultsList from './components/ResultsList';
import Pagination from './components/Pagination';

function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState(''); 
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const getMovies = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=62aede51&s=${query}&page=${page}`);
        const data = await response.json();
        
        if (data.Response === "True") {
          setMovies(data.Search);
          setTotalPages(Math.ceil(data.totalResults / 10));
        } else {
          setMovies([]); 
          setTotalPages(0);
          setError(data.Error === "Movie not found!" ? "Belə bir film tapılmadı 😔" : data.Error);
        }
      } catch (err) {
        console.log("Xəta baş verdi: ", err); 
        setError("Şəbəkə xətası baş verdi. İnternet bağlantınızı yoxlayın! 🌐");
        setMovies([]);
        setTotalPages(0);
      } finally {
        setIsLoading(false);
      }
    };

    const timerId = setTimeout(() => {
      if (query.trim() !== "") {
        getMovies();
      } else {
        setMovies([]);
        setError(null);
        setIsLoading(false);
        setTotalPages(0);
      }
    }, 500); 

    return () => {
      clearTimeout(timerId);
    };

  }, [query, page]); 

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>🎬 Kino Axtarış</h1>
        <p>Axtardığınız filmi sürətlə tapın</p>
      </header>
      
      <main>
        <SearchBar query={query} setQuery={setQuery} setPage={setPage} />
        
        {isLoading && <div className="state-message">Axtarılır... ⏳</div>}
        
        {error && !isLoading && <div className="state-error">{error}</div>}
        
        {!isLoading && !error && movies.length === 0 && query !== "" && (
          <div className="state-message">Film axtarmaq üçün adını tam yazın.</div>
        )}

        {!isLoading && !error && movies.length > 0 && (
          <>
            <ResultsList movies={movies} />
            <Pagination page={page} setPage={setPage} totalPages={totalPages} />
          </>
        )}
      </main>
    </div>
  );
}

export default App;