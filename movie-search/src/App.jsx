import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import ResultsList from './components/ResultsList';
import Pagination from './components/Pagination';
import useFetch from './hooks/useFetch';

function App() {
  const [query, setQuery] = useState(''); 
  const [page, setPage] = useState(1);
  
  const { movies, isLoading, error, totalPages } = useFetch(query, page);

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