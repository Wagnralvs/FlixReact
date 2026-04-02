import { useEffect, useState } from "react";
import "./App.scss";
import {  Movie, PaginationsType } from "./shared/models/movies";
import { getDiscoverMovies, loading$ } from "./shared/services/movieService";
import CardsMovies from "./componets/cards-movies/cards-movies.js";
import PaginationCard from "./componets/pagination/pagination.js";
import Header from "./componets/header/Header.js";
import { HashRouter, Route, Routes } from "react-router-dom";
import DetailsMovie from "./componets/details-movie/DetailsMovie.js";

interface Filters {
  genre: number | null;
  stream: number | null;
}

function App() {
  const [loading, setLoading] = useState<boolean>(false);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [filterType, setFilterType] = useState<Filters | null>(null);
  const [pageRequest, setPageRequest] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<PaginationsType>({
    page: 1,
    total_pages: 1,
    total_results: 0,
  });

  useEffect(() => {
    onLoading(true);
    loading$.asObservable().subscribe((loading: boolean) => {
      setLoading(loading);
    });
    fetchMovies();
  }, [pageRequest, filterType]);

  function onLoading(isLoading: boolean) {
    loading$.next(isLoading);
  }

  async function fetchMovies() {
    try {
      const data = await getDiscoverMovies(pageRequest, filterType);
      setMovies(data.results);
      setCurrentPage({
        page: data.page,
        total_pages: data.total_pages,
        total_results: data.total_results,
      });
    } catch (error) {
      console.error(error);
      loading$.next(false);
    }
  }

  const searchMovieGenere = (genre: number | null, stream: number | null) => {
    loading$.next(true);
    setFilterType({
      genre: genre,
      stream: stream,
    });
  };

  const newRequest = (page: number) => {
    setMovies([]);
    loading$.next(true);
    setPageRequest(page);
  };

  return (
    <>
      <HashRouter>
        <div className="header">
          <Header genresMovie={searchMovieGenere} type={filterType?.genre} />
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                {loading && (
                  <div className="text-center">
                    <div className="spinner-border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                )}
                <CardsMovies movies={movies} />
                {!loading && (
                  <PaginationCard
                    paginations={currentPage}
                    newRequest={newRequest}
                  />
                )}
              </div>
            }
          ></Route>
          <Route path="/details" element={<DetailsMovie />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
