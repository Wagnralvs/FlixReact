import { Observable } from "rxjs";

export function getDiscoverMovies(page: number, filters:FilterActiveType): Promise<any>;
export function getMovieDetails(id: string | undefined): Promise<any>;
export function loadingMovies(): {
  getLoading: boolean;
  setLoading: (value: boolean) => void;
  loading: (isLoading: boolean) => void;
};
export function setDetailsMovie(movie: any): void;
export function getDetailsMovie () : Observable<any>;
export const loading$: BehaviorSubject<boolean>;
export const activeDetailsCard$: BehaviorSubject<boolean>;