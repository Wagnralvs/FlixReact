import { useEffect, useState } from "react";
import "./App.scss";
import { Movie, PaginationsType } from "./shared/models/movies";
import { getDiscoverMovies, loadingMovies } from "./shared/services/movieService";
import CardsMovies from "./componets/cards-movies/cards-movies.js";
import PaginationCard from "./componets/pagination/pagination.js";
import Header from "./componets/header/Header.js";
import { HashRouter, Route, Routes } from "react-router-dom";
import DetailsMovie from "./componets/details-movie/DetailsMovie.js";

function App() {
  const { loading, getLoading} = loadingMovies();
  const [movies, setMovies] = useState<Movie[]>([]);
  const [pageRequest, setPageRequest] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<PaginationsType>({
    page: 1,
    total_pages: 1,
    total_results: 0,
  });

  useEffect(() => {
    fetchMovies();
  }, [pageRequest]);

  async function fetchMovies() {
    try {
      const data = await getDiscoverMovies(pageRequest);
      setMovies(data.results);
      setCurrentPage({
        page: data.page,
        total_pages: data.total_pages,
        total_results: data.total_results,
      });
      loading(false);
    } catch (error) {
      console.error(error);
      loading(false);
    }
  }

 const  newRequest = (page: number) => {
    loading(true);
    setPageRequest(page);
    console.log('pages ' + page);
  //  fetchMovies();
  }

  return (
    <>
    <Header />
    <HashRouter>
     <Routes>
      <Route path="/" 
      element={
       getLoading ? (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div>
          <CardsMovies movies={movies} />
          <PaginationCard paginations={currentPage} newRequest={newRequest} />
        </div>
      )
      }>

      </Route>
      <Route path="/details/:id" element={<DetailsMovie />} />
     </Routes>
    </HashRouter>
     
    </>
  );
}

export default App;
