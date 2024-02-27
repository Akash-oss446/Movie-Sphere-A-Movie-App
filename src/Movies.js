import React from "react";
import { useGlobalContext } from "./Context";
import { NavLink } from "react-router-dom";
const Movies=()=>{
    const { movie }=useGlobalContext();
    return (
    <>
    <section className="movie">
        <div className="grid grid-4-col">
        {movie ?
        movie.map((curmovie)=>{
            const {imdbID,Title,Poster}=curmovie
            const movieName=Title.substring(0,15);
        return (
            <NavLink to={`movie/${imdbID}`} key={imdbID}>
            <div className="card">
                <div className="card-info">
                    <h2>{movieName.length >= 15 ? `${movieName}...`:movieName}</h2>
                    <img src={Poster} alt={imdbID} srcSet=" " />
                </div>
            </div>
            </NavLink>
        );
        }):""}
        </div>
    </section>
    
        </>

        
    );
  
};
export default Movies;