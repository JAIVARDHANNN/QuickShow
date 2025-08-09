import React from 'react'
import HeroSection from '../Components/HeroSection'
import FeaturedSection from '../Components/FeaturedSection'
import movieCard from '../Components/movieCard'

const Home = () => {
  return (
    <>
      <HeroSection/>
      <FeaturedSection/> 
      <movieCard/>
    </>
  )
}

export default Home