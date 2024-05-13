
import { Link } from "react-router-dom";


export default function CatSection() {
  
  return (
    <div className="flex">
      <div className="flex-1 p-20 flex flex-col justify-center items-center">
        <h2 className="text-lg text-center text-gray-700 font-montserrat">
          Adopting a cat is a compassionate choice that brings immeasurable rewards. Cats are known for their independent and affectionate nature, making them wonderful companions. By adopting a cat from a shelter, you are not only providing a loving home but also giving a deserving feline friend a chance for a better life.
        </h2>
        <Link to="/pets">
          <button className="mt-6 bg-purple-700 text-white px-8 py-2 rounded-full transition duration-300 hover:bg-yellow-400 hover:text-purple-700 font-amatic text-2xl font-bold" >
            See All Cats
          </button>
        </Link>
      </div>
      <div className="flex-1">
        <img className="w-full" src="https://i.imgur.com/T2sxjnJ.jpg" alt="Cat" />
      </div>
    </div>
  );
}
