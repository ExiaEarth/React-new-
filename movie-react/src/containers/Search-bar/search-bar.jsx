import { useState } from "react";
// importe react avec npm i --s react
import style from "./search-bar.module.scss";
// importe scss

const SearchBar=(props)=> {

    const {placeholder}=props

    const {onSearch}=props

    const [input,setInput]=useState('')

    const handleClick=()=>{ 
        console.log(input);
        onSearch(input)
    }
    

    return(
        <div className={style.container}>
            <input type="text" value={input} onChange={e=>setInput(e.target.value)} placeholder={placeholder} />
            <button onClick={handleClick}>Search</button>
        </div>
    );
}

export default SearchBar;