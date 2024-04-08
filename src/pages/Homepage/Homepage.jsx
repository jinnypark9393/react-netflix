import React from 'react'
import './Homepage.style.css'
import Banner from './components/Banner/Banner'
import PopularMovieSlide from './components/PopularMovieSlide/PopularMovieSlide'

// 1. 배너 (Top popular movie의 첫번째 item)
// 2. Popular movie
// 3. Top rated movie
// 4. Upcoming movie
const Homepage = () => {
  return (
    <div>
      <Banner />
      <PopularMovieSlide />
    </div>
  )
}

export default Homepage