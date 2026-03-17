import { Movie } from "../../shared/models/movies";
import "./cars-movies.scss";
import { useNavigate } from "react-router-dom";

interface Props {
  movies: Movie[];
}

export default function CardsMovies(props: Props) {
  //const { loading } = loadingMovies();
  const movies = props.movies;
  const navegate = useNavigate();

  function detailsMovie(id: number) {
    navegate(`/details/${id}`);
  }

// useEffect(() => {
//   loading(false);
// }, [movies])


  return (
    <div>
        <li className="content-cards" >
        {movies.map((movie) => (
          <div key={movie.id} className="card" onClick={()=>detailsMovie(movie.id)}>
            {/* <h2 className="card-title">{movie.title}</h2> */}
            <img
                className="card-img"
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt={movie.title}
                />
            {/* <p>{movie.overview}</p> */}
          </div>
        ))}
      </li>
    </div>
 )
}