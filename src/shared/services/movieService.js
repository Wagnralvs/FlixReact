import axios from "axios";
import { useState } from "react";

const API_KEY = "3c73adadb548553996663ead3f1635c9";
const BASE_URL = "https://api.themoviedb.org/3/discover/movie";
const BASE_URL_DETAILS = "https://api.themoviedb.org/3/encontrar/934433";
const params = {
  language: "pt-BR",
  api_key: API_KEY,
};

export const getDiscoverMovies = async (page) => {
    const response = await axios ({
      method: "GET",
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
