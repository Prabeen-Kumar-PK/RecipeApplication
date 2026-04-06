import React, { useState } from "react";
import { Search, ChefHat } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({searchnav}) => {
  const [input, setInput] = useState("");
  const navigate = useNavigate()


  const SearchHandler = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    searchnav(input.trim());
    navigate(`/search/${input.trim()}`)

    setInput("");
  };

  return (
    <>
      <nav className="sticky top-0 z-50 bg-gray-950/90 text-gray-100 backdrop-blur-md  shadow-2xl shadow-black/50 border-b border-blue-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex min-h-16 flex-wrap items-center justify-between gap-3 py-3 sm:flex-nowrap sm:py-0">
            <Link
              to={"/"}
              className="flex shrink-0 items-center text-lg font-bold tracking-wider text-white transition-all duration-300 ease-in-out hover:scale-105 sm:text-xl"
            >
              <ChefHat className="fill-white/20  transition-all duration-300 ease-in-out" />
              <span className="text-cyan-300  ">Recipe</span>
              Corner
            </Link>
            <form
              className="order-3 flex w-full sm:order-2 sm:mx-4 sm:max-w-lg sm:flex-1"
              onSubmit={SearchHandler}
            >
              <input
                type="text"
                placeholder="search for the recipes"
                className="w-full min-w-0 rounded-l-full border border-gray-700 bg-gray-900 px-4 py-2 text-sm font-thin text-gray-50 placeholder:text-gray-600 shadow-inner shadow-black/50 transition-all duration-300 ease-in-out focus:border-transparent focus:outline-none focus:ring-1 focus:ring-blue-600/50 sm:px-7 sm:text-base"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button className="rounded-r-full bg-linear-to-b from-blue-700 to-cyan-400 p-2.5 text-white shadow-lg shadow-blue-800/50 transition-all duration-300 ease-in-out hover:bg-linear-to-b hover:from-blue-800 hover:to-cyan-500 ">
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
