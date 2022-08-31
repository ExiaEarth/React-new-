import MovieListItem from "./movie-list-item";

const MovieList=(props)=>{
    const { movies }=props;
    return(
        <div>
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