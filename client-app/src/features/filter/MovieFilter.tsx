import { Button, LabelGroup, Segment } from "semantic-ui-react";
import GenreLabel from "./GenreLabel";
import { observer } from "mobx-react-lite";
import { useStore } from "../../app/stores/store";
import genres from "../../app/models/genres";

export default observer( function MovieFilter() {

    const{movieStore} = useStore();
    const{applyFilters} = movieStore;
    const handleApplyFilter = ()=>{
        applyFilters();
    }
    return (
        <>
            <Segment
                textAlign='center'
                attached='top'
                secondary
                inverted
                color='black'
                
            >
               <h3>Filters</h3>
            </Segment>
            <Segment attached >
                <LabelGroup size='medium'>
                    {genres.map((genre, index) => (
                        <GenreLabel value={genre} />
                    ))}
                </LabelGroup>
                
            </Segment>
            <Segment clearing  attached textAlign="center" >
                
                    <Button 
                        onClick={handleApplyFilter} 
                        color="yellow" 
                        content="Apply Filters" 
                        />
               
            </Segment>
        </>
    )
});