import { Card, CardContent, CardHeader, CardMeta, Image } from "semantic-ui-react";
import './movieCard.css'
import { observer } from "mobx-react-lite";
import { useState } from "react";
interface Props{
    ImdbID: number,
    Title: string,
    ImdbLink: string,
    ImdbScore: number,
    Genre: string,
    Poster: string
}
export default observer( function MovieCard(props:Props) {
    const [imageKey, setImageKey] = useState(0)

    const handleError = () => {
        // Handle the image loading error
        setImageKey((prevKey) => prevKey + 1);
      };
      const truncateTitle = (title: string, maxLength: number) => {
        if (title.length > maxLength) {
          return title.slice(0, maxLength) + '...';
        }
        return title;
      };  
    return (
        <div className="movieCard">

        <Card onClick={()=>window.open(props.ImdbLink, '_blank')}>
            <Image 
                src={imageKey === 0 ? props.Poster: "/unavailable.png"} 
                wrapped 
                ui={false} 
                onError={handleError}
                />
            <CardContent>
                <CardHeader textAlign="left">{truncateTitle(props.Title,15)}</CardHeader>
                <CardMeta>
                    <span className='date'>{"Imdb Rating: "} {props.ImdbScore}</span>
                </CardMeta>
                <Card.Description>
                   {truncateTitle("Genre: "+props.Genre,18)}
                </Card.Description>
            </CardContent>
        </Card>
        </div>
    )
});