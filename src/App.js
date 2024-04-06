import { Routes, Route } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import MoviesPage from './pages/Movies/MoviePage'
import MovieDetail from './pages/MovieDetail/MovieDetail'
import Homepage from './pages/Homepage/Homepage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from 'axios';

// 홈페이지 : /
// 영화 전체 페이지 (서치) : /movies?q=aerwe
// 영화 디테일 페이지 : /movies/:id
// 추천영화 : /movies/:id/recommendation
// 리뷰 : /movies/:id/recommendation
function App() {
  return (
    <div className="App">
      <Routes>
        {/* AppLayout 안에 들어가는 route들은 모두 applayout을 적용받음 */}
        <Route path="/" element={<AppLayout />}>
          {/* index: 부모의 path를 그대로 쓰겠다는 뜻 */}
          <Route index element={<Homepage />} />
          {/* nested route 구성 */}
          <Route path="movies">
            <Route index element={<MoviesPage />} />
            <Route path=":id" element={<MovieDetail />} />
          </Route>
          {/* <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:id" element={<MovieDetail />} /> */}
        </Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </div>
  );
}

axios.get(`/movies/34`)
export default App;
