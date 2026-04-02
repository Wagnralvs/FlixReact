import { useEffect, useRef } from "react";
import { Movie } from "../../shared/models/movies"
import {  activeDetailsCard$, loading$, setDetailsMovie} from "../../shared/services/movieService";
import "./cars-movies.scss";
import { useNavigate } from "react-router-dom";

interface Props {
  movies: Movie[];
}

export default function CardsMovies(props: Props) {
  const movies = props.movies;
  const navegate = useNavigate();
  const lastMovieRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    onLoadind();
    if (lastMovieRef.current) {
      loading$.next(false);
    }
  }, [movies]);

  function detailsMovieCard(movie: Movie) {
    setDetailsMovie(movie);
    activeDetailsCard$.next(true);
    navegate('/details');
  }

  function onLoadind(): boolean {
   return loading$._value;
  }

  return (
    <div>
        <li className="content-cards" >
        {movies.map((movie) => (
          <div key={movie.id} className={!onLoadind() ? 'card' : ''}  onClick={()=>detailsMovieCard(movie)} ref={movies.length - 1 ? lastMovieRef : null}>
            {!onLoadind() && (
            <img
                className="card-img"
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt={movie.title}
                />
            )}
          </div>
        )
      )}
      </li>
    </div>
 )
}