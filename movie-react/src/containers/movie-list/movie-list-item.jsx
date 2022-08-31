const MovieListItem=(props)=>{
    const {title,overview,poster_path}=props
    return(
        <div>
            <img src={"https://image.tmdb.org/t/p/w500/"+poster_path} alt="" />
            <div>
                <h1>{title}</h1>
                <p>{overview}</p>
            </div>
        </div>
    )
}

export default MovieListItem;