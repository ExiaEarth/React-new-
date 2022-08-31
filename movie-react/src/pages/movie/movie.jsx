import axios from "axios";
import { useEffect, useState } from "react";
import MovieList from "../../containers/movie-list/movie-list";


const Movie = (props)=>{
    const {screen}=props

    const [movies,setMovies]=useState([]);

    const [page,setPage]=useState(1);
        useEffect(()=>{
            axios.get(`https://api.themoviedb.org/3/movie/${screen}?api_key=c9e23b610c2f0c1040a493fc10ce5aaf&language=fr-FR&page=${page}`)
            .then(({data})=>{
                console.log(data)
                setMovies(data.results);
            })
        },[page,props]
    )

    const handleClick=()=>{
        setPage(p=>p+1)
    }
    const resetPage=()=>{
    if (page<1) {
        setPage(1)
    }
       
    }

    return(
        <div >
            <h1>{page}</h1>
            <button onClick={handleClick}>Click</button>
            <button onClick={resetPage}>return</button>
            <MovieList movies={movies}></MovieList>
        </div>
    );
};



export default Movie;