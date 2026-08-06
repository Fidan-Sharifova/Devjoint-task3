import React from 'react';

function SearchBar(props) {
  const { query, setQuery } = props;

  return (
    <div className="search-container">
      <input 
        type="text" 
        className="search-input"
        placeholder="Film axtar (məs: Avengers)..." 
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;