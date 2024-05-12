import React from "react";
import { Link } from "react-router-dom";

export default function DogSection() {
  return (
    <div className="flex flex-row mb-8">
      <div className="flex-1">
        <img className="w-full" src="https://i.imgur.com/hnZXESV.jpg" alt="Dog" />
      </div>
      <div className="flex-1 p-8 flex flex-col justify-center items-center">
        <h2 className="text-lg text-center text-gray-700 font-montserrat">
          Adopting a dog not only brings joy to your life but also saves lives. Each year, millions of dogs end up in shelters, waiting for a loving home. Choosing to adopt gives these dogs a second chance at happiness and creates a strong bond of companionship that can last a lifetime.
        </h2>
        <Link to="/alldogs">
          <button className="mt-6 bg-purple-700 text-white px-8 py-2 rounded-full transition duration-300 hover:bg-yellow-400 hover:text-purple-700 font-amatic text-2xl font-bold">
            See All Dogs
          </button>
        </Link>
      </div>
    </div>
  )
}
