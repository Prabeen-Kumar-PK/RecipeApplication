import { Globe } from "lucide-react";
import React from "react";

const Cuisine = () => {
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
  ];

  return (
    <div className="bg-gray-900?80 border-b  border-y-gray-800 shadow-inner shadow-black/20 pl-5">
      <div className="max-w-8xl mx-auto px-4 lg:x-8 overflow-x-auto scrollbar-hide flex items-center gap-4">
        <div className="flex items-center  py-4">
          <Globe className="text-cyan-300 w-5 h-5 m-2" />
          <h2 className="text-lg font-semibold text-gray-50">
            Featured Cuisines :
          </h2>
        </div>
        <div className="flex items-center gap-4 px-4">
          {featuredCuisines.map((area,index) => (
            <span
              key={index}
              className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm font-light cursor-pointer hover:bg-gray-700 transition-colors duration-200"
            >
              {area}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cuisine;
