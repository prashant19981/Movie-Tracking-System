import { Grid, Segment } from "semantic-ui-react";
import MovieCard from "./MovieCard";
import { useStore } from "../../app/stores/store";
import { observer } from "mobx-react-lite";
import NotFound from "../errors/NotFound";

export default observer(function MovieResults() {
    const { movieStore } = useStore();
    const { movieList } = movieStore;
    if (movieList.length < 1) return <NotFound />
    return (
        <Segment attached padded >
            <Grid columns={3} stackable textAlign="center">
                {movieList.map((movie) => (
                    <MovieCard
                        key={movie.imdbId}
                        ImdbID={movie.imdbId}
                        Title={movie.Title}
                        ImdbLink={movie["Imdb Link"]}
                        ImdbScore={movie["IMDB Score"]}
                        Poster={movie.Poster}
                        Genre={movie.Genre}
                    />
                ))
                }
            </Grid>
        </Segment>
    )
});