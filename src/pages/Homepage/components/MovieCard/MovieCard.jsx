import React from "react";
import { Badge } from "react-bootstrap";
import "./MovieCard.style.css";

const genres = [
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 14,
    name: "Fantasy",
  },
  {
    id: 36,
    name: "History",
  },
  {
    id: 27,
    name: "Horror",
  },
  {
    id: 10402,
    name: "Music",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
  {
    id: 10770,
    name: "TV Movie",
  },
  {
    id: 53,
    name: "Thriller",
  },
  {
    id: 10752,
    name: "War",
  },
  {
    id: 37,
    name: "Western",
  },
];

const MovieCard = ({ movie }) => {
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
          {movie.genre_ids.map((id) => (
            genres.find(genre => genre.id == id) && (
                <Badge className="movie-genre-item" bg="danger" key={id}>{genres.find(genre => genre.id === id).name}</Badge>
            )
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
