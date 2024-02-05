import { Movie } from "./movie";

export interface PaginatedResult {
    currentPage: number;
    totalPages: number;
    movies: Movie[];
  }