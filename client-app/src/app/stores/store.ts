import { createContext, useContext } from "react";
import MovieStore from "./movieStore";
import PaginationStore from "./paginationStore";

interface Store{
    movieStore: MovieStore;
    paginationStore: PaginationStore
}

export const store : Store = {
    movieStore : new MovieStore(),
    paginationStore: new PaginationStore(),
}

export const StoreContext = createContext(store);

export function useStore(){
    return useContext(StoreContext);
}