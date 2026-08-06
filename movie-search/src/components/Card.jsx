import React from 'react';

function Card(props) {
  const { movie } = props;

  
  const imageUrl = movie.Poster !== "N/A" ? movie.Poster : "https://static.vecteezy.com/system/resources/thumbnails/008/695/917/small/no-image-available-icon-simple-two-colors-template-for-no-image-or-picture-coming-soon-and-placeholder-illustration-isolated-on-white-background-vector.jpg";

  return (
    <div className="card">
      <img src={imageUrl} alt={movie.Title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title" title={movie.Title}>{movie.Title}</h3>
        <p className="card-year">🗓️ {movie.Year}</p>
      </div>
    </div>
  );
}

export default Card;