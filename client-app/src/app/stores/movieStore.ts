import { makeAutoObservable, runInAction } from "mobx";
import { Movie } from "../models/movie";
import agent from "../api/agent";
import { store } from "./store";

export default class MovieStore {
    // Mobx store stores the list of movies being displayed on the page
    movieRegistry = new Map<string, Movie>();
    searchQuery: string = "";
    filterParams: string = "genre=";
    localFilter = ""
    constructor() {
        // makes the changes to the state of the variable inside the mobx store observable to 
        //components that have observer tag attached to them 
        makeAutoObservable(this);
    }

    get movieList() {
        return Array.from(this.movieRegistry.values());
    }

    setQuery = (query: string) => {
        this.searchQuery = query;
    }

    setMovies = async () => {
        // called when the search query is executed, fetches the data from the server with search query
        this.clearMovieRegistry();
        try {
            const response = await agent.Movies.list();

            runInAction(() => {
                response.movies.forEach((movie) => {
                    this.movieRegistry.set(movie.imdbId.toString(), movie);
                });
                store.paginationStore.setTotalPage(response.totalPages);


            })
        }
        catch (error) {
            console.log(error);
            // add other error handling mechanism
        }
    }
    clearMovieRegistry() {
        this.movieRegistry.clear();
    }

    addFilters = (genre: string) => {
        this.localFilter = this.localFilter + genre + ",";
        console.log(this.localFilter);
    }

    removeFilters = (genre: string) => {
        // Split the string into an array of genres
        const genresArray = this.localFilter.split(',');

        // Check if the genre is present in the array
        const genreIndex = genresArray.indexOf(genre);

        // If the genre is found, removing it from the array
        if (genreIndex !== -1) {
            genresArray.splice(genreIndex, 1);
        }

        // Join the array back into a string
        this.localFilter = genresArray.join(',');

    }

    applyFilters = async () => {
        // a local filter variable is used to store genres thats been added by the user,
        // this only gets added to the main query when the user clicks on apply filter.
        this.filterParams = "genre=" + this.localFilter;
        this.setMovies();
    }

}