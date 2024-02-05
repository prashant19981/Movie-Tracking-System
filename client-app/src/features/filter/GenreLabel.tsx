import { observer } from "mobx-react-lite";
import { useState } from "react";
import { Icon, Label } from "semantic-ui-react";
import { useStore } from "../../app/stores/store";

interface Props{
 
    value: string;
}
export default observer(function GenreLabel(props:Props){
    const{ movieStore } = useStore();
    const{addFilters, removeFilters} = movieStore
    const [isSelected,setIsSelected] = useState(false);

    function handleAddGenre(){
        if(!isSelected){
        setIsSelected(true);
        addFilters(props.value);
        }
    }
    function handleRemoveGenre(){
        setIsSelected(false);
        removeFilters(props.value);
    }

    const labelStyle: React.CSSProperties = {
        cursor: 'pointer',
        backgroundColor: isSelected ? 'rgba(255,199,0,255)'  : 'rgb(217, 217, 217)',
      };

    return(
        <Label 
     
        style={labelStyle} 
        onClick={handleAddGenre}>
            {props.value}
            {isSelected && (
                <Icon 
                onClick={(e:React.MouseEvent<HTMLDivElement>) => {
                    e.stopPropagation(); // Prevents the Label's onClick from being triggered
                    handleRemoveGenre();
                }}
                name='close' />
            )}
        </Label>
    );
});