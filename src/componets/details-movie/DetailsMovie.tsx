import { useEffect, useState } from "react";
import {  getDetailsMovie } from "../../shared/services/movieService.js";
import { Movie } from "../../shared/models/movies.js";
import "./detailsMovie.scss";

export default function DetailsMovie() {
  const [movieDetailsCard, setMovieDetails] = useState<Movie | null>(null);

  useEffect(() => {
     getDetailsMovie().subscribe((movie) => {
      setMovieDetails(movie);
    });
  }, []);


  return (
    <div className="content-details">
      <h3 className="mb-5  d-flex justify-content-center">Detalhes do Filme</h3>
      <div className="card-details">
        <img
          className="card-img"
          src={`https://image.tmdb.org/t/p/original${movieDetailsCard?.poster_path}`}
          alt={movieDetailsCard?.title}
        />
        <section className="card-info">
        <h4>{movieDetailsCard?.title}</h4>
        <h5>Sinopse</h5>
        <p>{movieDetailsCard?.overview}</p>

          <h5>Data de Lançamento</h5>
        <p>{movieDetailsCard?.release_date}</p>

        <h5>Avaliação</h5>
        <p>{movieDetailsCard?.vote_average}</p>
      <span></span>

        </section>
      </div>
    </div>
  );
}
