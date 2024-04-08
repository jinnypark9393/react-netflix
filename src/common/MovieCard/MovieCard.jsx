import React from "react";
import { Badge } from "react-bootstrap";
import "./MovieCard.style.css";
import useMovieGenreQuery from '../../hooks/useMovieGenre'

const MovieCard = ({ movie }) => {
  const { data: genreData } = useMovieGenreQuery()
  const showGenre = (genreIdList) => {
    if (!genreData) return []
    const genreNameList = genreIdList.map((id) => {
      const genreObj = genreData.find((genre)=>genre.id ===id)
      return genreObj.name
    })
    return genreNameList
  }
  return (
    <div
      style={{
        backgroundImage: `url("https://media.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}")`,
      }}
      className="movie-card"
    >
      <div className="overlay">
        <h5>{movie.title}</h5>
        <div>
          {showGenre(movie.genre_ids).map((genre, index) => (
            <Badge className="movie-genre-item" bg="danger" key={index}>{genre}</Badge>
          ))}
        </div>
        <div>
          <div className="movie-info">rating: {Math.round(movie.vote_average * 10)/10}</div>
          <div className="movie-info">popularity: {Math.round(movie.popularity)}</div>
          <div className="movie-adult">{movie.adult ? <Badge bg="danger">청소년 관람 불가</Badge> : <Badge bg="success">청소년 관람 가능</Badge>}</div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
