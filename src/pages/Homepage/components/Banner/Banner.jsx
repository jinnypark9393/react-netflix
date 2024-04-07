import React from "react";
import usePopularMoviesQuery from "../../../../hooks/usePopularMovies";
import Alert from "react-bootstrap/Alert";
import './Banner.style.css'

const Banner = () => {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();
  console.log("Results: ", data?.results[0]);
  console.log(
    "URL: ",
    `url(https://media.themoviedb.org/t/p/w533_and_h300_bestv2${data?.results[0].poster_path})`
  );
  if (isLoading) {
    // 로딩스피너 이미지 추가
    <h1>Loading...</h1>;
  }
  if (isError) {
    <Alert variant="danger">{error.message}</Alert>;
  }
  return (
    <div>
      <div
        className="banner-image"
        style={{
          backgroundImage: `url("https://media.themoviedb.org/t/p/w533_and_h300_bestv2${data?.results[0].poster_path}")`,
        }}
      >
        <div className="text-white banner-text-area">
            <h2 style={{ fontWeight: "700"}}>{data?.results[0].title}</h2>
            <p style={{ fontWeight: "300"}}>{data?.results[0].overview}</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
