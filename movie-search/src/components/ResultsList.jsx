import React from 'react';
import Card from './Card';

function ResultsList(props) {
  const { movies } = props;

  if (!movies || movies.length === 0) {
    return null; 
  }

  return (
    <div className="results-grid">
      {movies.map((movie) => (
        <Card key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
}

export default ResultsList;