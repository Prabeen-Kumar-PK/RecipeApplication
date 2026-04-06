import React from "react";
import { API_URL, useFetch } from "../hooks/useFetch";
import { BookCopy } from "lucide-react";
import { Link } from "react-router-dom";

const CategorySelection = ({ fetchUrl,filterbyCategory }) => {
  
  const { data} = useFetch(fetchUrl);
  const categories = data?.categories || [];

  console.log(categories)

  return (
    <>
      <div className="flex items-center gap-2 mb-6">
        <h1 className="mb-5 flex items-center pl-2 text-2xl font-bold tracking-tight text-gray-100 sm:pl-4 sm:text-3xl ">
          <BookCopy className="mr-2 h-5 w-5 text-cyan-400 sm:mr-3 sm:h-6 sm:w-6" />
          Category selections
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories?.map((category) => (
          <Link
            to={`/category/${category.idCategory}`}
            key={category.idCategory}
            onClick={()=>filterbyCategory(category.strCategory)}
            className="cursor-pointer rounded-lg bg-gray-800 p-4 text-center text-sm font-light text-gray-300 transition-colors duration-200 hover:bg-gray-700"
          >
            <div
              key={category.idCategory}
              className="bg-gray-800 rounded-lg p-4 flex flex-col items-center"
            >
              <img
                src={category.strCategoryThumb}
                alt={category.strCategory}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h2 className="text-lg font-bold text-gray-300">
                {category.strCategory}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default CategorySelection;
