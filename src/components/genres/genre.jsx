import React from 'react'
import "../../app/App.css";
import GenreItem from "./genreItem";

function Genre(props) {
  return (
    <div className="profile-genres">
      {props.genres.map((genre, k) => <GenreItem genre={genre} />)}
    </div>
  );
}

// Export Genre
export default Genre;
