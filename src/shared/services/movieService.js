import axios from "axios";
import { useState } from "react";
import { BehaviorSubject } from "rxjs";

const API_KEY = "3c73adadb548553996663ead3f1635c9";
const BASE_URL = "https://api.themoviedb.org/3/discover/movie";
const BASE_URL_DETAILS = "https://api.themoviedb.org/3/encontrar/934433";
const params = {
  language: "pt-BR",
  with_genres: "",
  with_watch_providers: "",
  watch_region: "BR",
  api_key: API_KEY,
};

export const getDiscoverMovies = async (page, filters) => {

  if (filters) {
    params.with_genres = filters?.genre;
    params.with_watch_providers = filters?.stream;
  }
    const response = await axios ({
      method: "GET",
       headers: {
       accept: 'application/json',
       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzczYWRhZGI1NDg1NTM5OTY2NjNlYWQzZjE2MzVjOSIsIm5iZiI6MTc3MzI1ODI3MC4wNTcsInN1YiI6IjY5YjFjNjFlOWVkNmEzMTMyMmE3NjkwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.st83X0CfkKCgZzmijDKjpgnTRkCy64J3th7ZlwRtPFA'
     },
      url: `${BASE_URL}?page=${page}`,
      params: params,
    });

    return response.data;
};

export const getMovieDetails = async (id) => {
  const response = await axios({
    method: "GET",
    //url: `${BASE_URL_DETAILS}${id}`,
     url: BASE_URL_DETAILS,
    params: {
     // language: "pt-BR",
      //credit_id: id.toString(),
      api_key: API_KEY,
    },
  });

  return response.data;
};

export const loadingMovies = () => {
    const [getLoading, setLoading] = useState(true);

    const loading = (isLoading) => {
        setLoading(isLoading);
    }
    return { getLoading, setLoading, loading };
}

export const loading$ = new BehaviorSubject(false);
export const activeDetailsCard$ = new BehaviorSubject(false);
const movieDetailsCard$ = new BehaviorSubject(null);

export const setDetailsMovie = (movie) => {
  movieDetailsCard$.next(movie);
}

export const getDetailsMovie = () => {
  return movieDetailsCard$.asObservable();
}
