import { Globe } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../hooks/useFetch";

const Cuisine = ({ filterbyArea }) => {
  const featuredCuisines = [
    "American ",
    "Italian ",
    "Chinese ",
    "Mexican ",
    "Indian ",
    "French ",
    "Thai ",
    "Japanese ",
    "Spanish",
    "British",
    "Russian",
    "Canadian"
  ];

  return (
    <div className="border-b border-y-gray-800 bg-gray-900/80 shadow-inner shadow-black/20">
      <div className="mx-auto flex max-w-7xl  flex-wrap  gap-3 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Globe className="m-2 h-5 w-5 text-cyan-300" />
          <h2 className="text-base font-semibold text-gray-50 sm:text-lg">
            Featured Cuisines :
          </h2>
        </div>
        <div className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
          <div className="flex min-w-max items-center gap-3">
          {featuredCuisines.map((area,index) => (
            <Link
              to={`/area/${area.trim()}`}
              onClick={(e)=>filterbyArea(e.target.textContent.trim())}
              key={index}
              className="cursor-pointer rounded-full bg-gray-800 px-3 py-1.5 text-sm font-light whitespace-nowrap text-gray-300 transition-colors duration-200 hover:bg-gray-700"
            >
              {area}
            </Link>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cuisine;
