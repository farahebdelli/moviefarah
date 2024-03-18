import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./style.css";
const MovieListe = ({filtredMovie}) => {

  return (
    <div className="movie-liste">
        {
            filtredMovie.map((movie,index) => (
                <MovieCard key={index} movie={movie}/>

                
            ))}
    </div>
  );
};
  

export default MovieListe;



