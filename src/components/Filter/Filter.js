import React from "react";
import MovieListe from "../MovieListe/MovieListe";

const Filter = ({ ratingChange, searchInput, movieData }) => {
  // Vérifiez si movieData est défini avant d'appeler filter() pour éviter l'erreur
  const filteredMovie = movieData ? movieData.filter(
    (movie) =>
      movie.title.toLowerCase().includes(searchInput.toLowerCase()) &&
      movie.rating >= ratingChange
  ) : [];

  return (
    <div>
      <MovieListe filtredMovie={filteredMovie} />
    </div>
  );
};

export default Filter;
