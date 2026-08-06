import React from 'react';

function SearchBar(props) {
  const { query, setQuery, setPage } = props;

  const handleChange = (e) => {
    setQuery(e.target.value);
    setPage(1);
  };

  return (
    <div className="search-container">
      <input 
        type="text" 
        className="search-input"
        placeholder="Film axtar (məs: Avengers)..." 
        value={query}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBar;