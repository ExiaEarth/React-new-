import './App.css';
import Search from './pages/search/search';
import {BrowserRouter,Route,Routes,Navigate}from 'react-router-dom';
// import NowPlaying from './pages/now-playing/now-playing';
import Movie from './pages/movie/movie.jsx';
import NavBar from './containers/nav-Bar/nav-Bar';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <NavBar/>
          <Routes>
            <Route path='/search' element={ <Search/>}/>
            <Route path='/popular' element={ <Movie screen="popular"/>}/>
            <Route path='/nowplaying' element={ <Movie screen="now_playing"/>}/>
            <Route path='*' element={ <Navigate to="/search"/>}/>
          </Routes>
          <h1>Je suis la</h1>
         </div>
    </BrowserRouter>

  );
}

export default App;
