import { observer } from "mobx-react-lite";
import { Grid, GridColumn, Pagination } from "semantic-ui-react";
import { useStore } from "../stores/store";

export default observer( function PaginationBox(){
    const {paginationStore,movieStore} = useStore();
    const{totalPage,currentPage,setCurrentPage} = paginationStore;
    const{setMovies} = movieStore;
    function handlePageChange(event: React.MouseEvent, data: any){
        // handling the page change
        const clickedPageNumber = data.activePage;     
            setCurrentPage(clickedPageNumber);
            setMovies();
        
    }
    
    return(
        <Grid centered>
        <GridColumn width="10" textAlign="center">
        <Pagination
                defaultActivePage={currentPage}
                onPageChange={handlePageChange}
                firstItem={null}
                lastItem={null}
                pointing
                secondary
                totalPages={totalPage}
            />
        </GridColumn>
        </Grid>    
    )
});