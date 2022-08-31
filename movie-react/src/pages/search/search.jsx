import axios from "axios"; 
import { useState } from "react";
import SearchBar from "../../containers/search-bar/search-bar";

const Search=()=> {
    const[movies,setMovies]=useState([])
    // const searchFilm=(movieName)=>{console.log(movieName);}
    const searchFilm=(movieName)=>{axios.get()}

    return(
        <div>
            <SearchBar placeholder="movie name" onSearch={searchFilm}/>
        </div>
    );
}

export default Search;