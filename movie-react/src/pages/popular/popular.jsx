import axios from "axios";
import { useEffect, useState } from "react";
import MovieList from "../../containers/movie-list/movie-list";


const Popular=()=>{

    const [movies,setMovies]=useState([]);

    const [page,setPage]=useState(1);
        useEffect(()=>{
            axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=c9e23b610c2f0c1040a493fc10ce5aaf&language=fr-FR&page=${page}`)
            .then(({data})=>{
                console.log(data)
                setMovies(data.results);
            })
        },[page]
    )

    const handleClick=()=>{
        setPage(p=>p+1)
    }
    const resetPage=()=>{
        setPage(1)
    }

    return(
        <div >
            <button onClick={handleClick}>Click</button>
            <button onClick={resetPage}>return</button>
            <MovieList movies={movies}></MovieList>
        </div>
    );
};

export default Popular;