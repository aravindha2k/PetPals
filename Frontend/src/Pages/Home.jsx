import React from 'react'


import CatSection from '../AllCard/CatSection/CatSection'
import DogSection from '../AllCard/DogSection/DogSection'
import HeroCarousel from '../AllCard/HeroCoursel/HeroCarousel'

const Home = () => {
  return (
    <div className="parent">
    <div className="div1">
      <HeroCarousel />
    </div>
    <div className="div2">
      <CatSection />
    </div>
    <div className="div3">
      <DogSection />
    </div>
  </div>
    
    
  )
}

export default Home
