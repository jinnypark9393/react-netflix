import React from 'react'
import useTopRatedMoviesQuery from "../../../../hooks/useTopRatedMoviesQuery";
import { Alert } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {responsive} from "../../../../constants/responsive"
import MovieSlider from "../../../../common/MovieSlider/MovieSlider";

const TopRatedMovieSlide = () => {
    const { data, isLoading, isError, error } = useTopRatedMoviesQuery();
    if (isLoading) {
        return <h1>Loading...</h1>;
      }
      if (isError) {
        return <Alert variant="danger">{error.message}</Alert>;
      }
  return (
    <div>
        <MovieSlider title='Top Rated Movies' movies={data?.results} responsive={responsive} />
    </div>
  )
}

export default TopRatedMovieSlide