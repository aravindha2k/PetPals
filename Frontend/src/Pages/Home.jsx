import React from 'react'


import CatSection from '../AllCard/CatSection/CatSection'
import DogSection from '../AllCard/DogSection/DogSection'
import HeroCarousel from '../AllCard/HeroCoursel/HeroCarousel'

const Home = () => {
  return (
    <div className="parent">
    <div className="div1">
     <img className="h-1/2" src="https://dm6g3jbka53hp.cloudfront.net/static-images/pet-banner-tpn-27042024-v2.jpg" alt="" />
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
