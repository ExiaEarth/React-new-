import MovieListItem from "./movie-list-item";
import style from "./movie-list.module.scss";


const MovieList=(props)=>{
    const { movies }=props;
    return(
        <div className={style.movieGrid}>
            { movies.map(
                movie => <MovieListItem 
                key={movie.id}
                // title={movie.title}
                // overview={movie.overview}
                // poster_path={movie.poster_path}
                //equivalent avec destructuring
                {...movie}
                />
            )}
        </div>
    );
};

export default MovieList;