import style from "./movie-list.module.scss";

const MovieListItem=(props)=>{
    const {title,overview,poster_path}=props
    return(
        <div className={style.movie}>
            <img src={"https://image.tmdb.org/t/p/w500/"+poster_path} alt="" />
            <div className={style.info}>
                <h1>{title} </h1>
                <p>{overview}</p>
            </div>
        </div>
    )
}

export default MovieListItem;