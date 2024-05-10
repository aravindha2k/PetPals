import React, { useEffect, useState } from 'react'
import axios from "axios"

const Pets = () => {
  const[pets, setPets] = useState([])

  const fetchData = async(url)=>{
    try {
      const res = await axios (url)
      // console.log(res.data.data);
      setPets(res.data.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    fetchData("http://localhost:3000/pet/data")
  },[])

  return (
    <>
    <div>Pets page</div>
    {pets.map((pet)=>{
      return <h2 key={pet._id}>{pet.name}</h2>
    })}
    </>
  )
}

export default Pets