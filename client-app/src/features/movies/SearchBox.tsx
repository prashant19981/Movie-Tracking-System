import { Grid, GridColumn, Icon, Input } from "semantic-ui-react";
import { observer } from "mobx-react-lite";
import { useStore } from "../../app/stores/store";

export default observer( function SearchBox() {

    const { movieStore, paginationStore} = useStore();
    const{setQuery, searchQuery ,setMovies} = movieStore
    const{setCurrentPage, currentPage} = paginationStore;
    
    const handleSearchClick =  async () => {
        setCurrentPage(1);

        await setMovies();
   
    };
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        const { value } = e.target;
        setQuery(value);
    }
    const handleKeyDown = (event:React.KeyboardEvent<HTMLInputElement>) => {
        if (searchQuery && event.key === "Enter") {
            // If Enter key is pressed, trigger the search
            handleSearchClick();
        }
    };

    return (
        <Grid centered>
            <GridColumn width="10" textAlign="center">
                <Input
                    fluid
                    size="big"
                    icon={
                        <Icon name='search' 
                            inverted 
                            circular 
                            link 
                            onClick={handleSearchClick}/>}
                    placeholder='Search...'
                    value = {searchQuery}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                />
            </GridColumn>
        </Grid>
    );
});
