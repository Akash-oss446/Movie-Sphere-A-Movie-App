import React from "react";
import { useParams,NavLink } from "react-router-dom";
import Fetch from "./fetch";
const Single=()=>{
    const { id } = useParams();
    console.log(id);
    const { isLoading, movie, isError } = Fetch(`&i=${id}`);
  if (isLoading) {
    return (
      <section className="movie-section ">
        <div className="loading">Loading....</div>;
      </section>
    );
  }
    return (<>
      <section className="movie-section">
      <div className="movie-card">
        <figure>
          <img src={movie.Poster} alt="" />
        </figure>
        <div className="card-content">
          <p className="title">{movie.Title}</p>
          <p className=""></p>
          <p className="card-text">Released on: {movie.Released}</p>
          <p className="card-text">Genre: {movie.Genre}</p>
          <p className="card-text">Ratings: {movie.imdbRating} / 10</p>
          <p className="card-text">Country: {movie.Country}</p>
          <NavLink to="/Home" className="back-btn">
            Go Back
          </NavLink>
        </div>
      </div>
    </section>
    </>
    )
}
export default Single;