export function getDiscoverMovies(page: number): Promise<any>;
export function getMovieDetails(id: string | undefined): Promise<any>;
export function loadingMovies(): {
  getLoading: boolean;
  setLoading: (value: boolean) => void;
  loading: (isLoading: boolean) => void;
};
