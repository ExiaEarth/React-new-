import axios from "axios"; 
// importe axios avec npm i --s axios

import { useState } from "react";
// importe react avec npm i --s react

import MovieList from "../../containers/movie-list/movie-list";
import SearchBar from "../../containers/search-bar/search-bar";
// importe SearchBar pour avoir ma SearchBar
const Search=()=> {
    const[movies,setMovies]=useState([])

    const[page,setPage]=useState([])

    // const searchFilm=(movieName)=>{console.log(movieName);}

    const searchFilm=(movieName)=>{axios.get(`https://api.themoviedb.org/3/search/movie?query=${movieName}&api_key=c9e23b610c2f0c1040a493fc10ce5aaf&language=fr-FR&page=${page}&include_adult=false`)
    .then(({data})=>{
        setMovies(data.results)
    })
    .catch(err=>console.log(err))
}

    return(
        
        <div>
            <SearchBar placeholder="movie name" 
                onSearch={searchFilm}/>
            {/* <ul>
                {
                    movies.map(
                        movie => <li>{movie.title} {movie.release_date} </li>
                    )
                }
            </ul> */}

            <MovieList movies={movies}></MovieList>
        </div>
    );
};

export default Search;