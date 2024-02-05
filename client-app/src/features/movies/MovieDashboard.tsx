import { Grid, Segment } from "semantic-ui-react";
import MovieResults from "./MovieResults";
import { useStore } from "../../app/stores/store";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import MovieFilter from "../filter/MovieFilter";
import PaginationBox from "../../app/layout/PaginationBox";

export default observer(function MovieDashboard() {
    
    const { movieStore } = useStore();
    const { setMovies, movieRegistry, movieList } = movieStore;

    useEffect(() => {
        if (movieRegistry.size <= 1) setMovies();
    }, [movieRegistry])

    return (
        <>
            <Segment>

                <Grid verticalAlign="top">
                    <Grid.Column width='10' floated="left">
                        <MovieResults />
                    </Grid.Column>

                    <Grid.Column width='5' floated="right">
                        <MovieFilter />
                    </Grid.Column>
               </Grid>
                {movieList.length > 0 && (
                    <PaginationBox />
                )}
            </Segment>

        </>
    );
});