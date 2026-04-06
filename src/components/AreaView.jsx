import { ChevronLeft, Loader } from 'lucide-react';
import { Swiper, SwiperSlide } from "swiper/react";
import React from 'react'
import { Link } from 'react-router-dom';

const AreaView = ({ meals, loading }) => {
  return (
    <div>
      {loading ? (
        
      <div className="text-center p-8 text-gray-300">
        <Loader className="animate-spin inline-block mr-2 text-cyan-400" />
        Loading .....
      </div>
      ) : (
        <main className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="group mb-4 flex items-center px-1 text-base font-light tracking-wide text-gray-100 hover:text-cyan-300 sm:px-4 sm:text-xl"
          >
            <ChevronLeft className="mr-1 h-5 w-5 sm:h-6 sm:w-6" />
            Back to Home Page
          </Link>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
            
            {meals.length > 0 ? (
              meals.map((meal) => (
                <Link
                  to={`/recipe/${meal.idMeal}`}
                  key={meal.idMeal}
                  className="block w-full"
                >
                  <div className="rounded-3xl border border-gray-800 bg-gray-900 p-4 shadow-2xl shadow-black/70 transition duration-500 hover:scale-[1.02] hover:border-none hover:ring-1 hover:ring-cyan-400 hover:shadow-cyan-400/30  h-40 flex items-center justify-between   ">
                    <img
                      src={meal.strMealThumb}
                      alt={meal.strMeal}
                      className="w-full h-full object-cover rounded-xl"
                    />
                    <div className="p-4 ">
                      <h1 className="text-lg font-bold text-gray-300">
                        {meal.strMeal?.split(" ").slice(0, 4).join(" ")}
                      </h1>
                      <p className="text-gray-500">{meal.strArea}</p>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <p className="col-span-full text-center text-gray-500">
                No recipes found.
              </p>
            )}
            
          </div>
            
        </main>
      )}
    </div>
  );
};

export default AreaView