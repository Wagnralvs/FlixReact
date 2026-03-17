import { useEffect } from "react"
import { getMovieDetails } from "../../shared/services/movieService.js";
import { useParams } from "react-router-dom";

export default function DetailsMovie(){
const {id} = useParams();
useEffect(() => {
    console.log('id', id);
    fetchDetailsMovie();
}, [])

    async function fetchDetailsMovie(){
        try {
        const responde = await getMovieDetails(id);
        console.log('detailges',responde);

    } catch (error) {
        console.error(error);
    }
}
    return(
        <div>
            <h1>Details Movie</h1>
        </div>
    )
}