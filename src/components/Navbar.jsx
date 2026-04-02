import React, { useState } from "react";
import { Search, ChefHat } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [input, setInput] = useState("");

  const SearchHandler = (e) => {
    e.preventDefault();
    console.log("Searching")
    setInput("");
  };

  return (
    <>
      <nav className="sticky top-0 z-50 bg-gray-950/90 text-gray-100 backdrop-blur-md  shadow-2xl shadow-black/50 border-b border-blue-900/50">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link
              to={"/"}
              className="flex text-xl font-bold items-center text-white  transition-all duration-300 ease-in-out hover:scale-105 tracking-wider"
            >
              <ChefHat className="fill-white/20  transition-all duration-300 ease-in-out" />
              <span className="text-cyan-300  ">Recipe</span>
              Corner
            </Link>
            <form
              className="flex-1 max-w-lg mx-4 hidden sm:flex"
              onSubmit={SearchHandler}
            >
              <input
                type="text"
                placeholder="search for the recipes"
                className="w-full px-7 py-2 border border-gray-700 bg-gray-900 text-gray-50 placeholder:text-gray-600 font-thin rounded-l-full focus:outline-none focus:ring-blue-600/50 transition-all duration-300 ease-in-out shadow-inner shadow-black/50 focus:ring-1 focus:border-transparent"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button className="text-white bg-linear-to-b from-blue-700 to-cyan-400 p-2.5 rounded-r-full hover:bg-linear-to-b hover:from-blue-800 hover:to-cyan-500 transition-all duration-300 ease-in-out shadow-lg shadow-blue-800/50 ">
                <Search className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
