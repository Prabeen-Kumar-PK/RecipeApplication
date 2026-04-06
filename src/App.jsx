/* eslint-disable no-unused-vars */
import React, { useCallback, useState } from "react";
import MainRoute from "./Routes/MainRoute";
import Navbar from "./components/Navbar";
import Cuisine from "./components/Cuisine";
import { API_URL } from "./hooks/useFetch";

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);

  const filterRecipe = useCallback(async (query, filterType) => {
    setSearchLoading(true);
    setSearchResults([]);
    
    try {
      const response = await fetch(
        `${API_URL}/filter.php?${filterType}=${query}`,
      );
      const data = await response.json();
 
      setSearchResults(data?.meals || []);
    
    } catch (error) {
      console.error("Error fetching search results:", error);
      setSearchResults([]);
    } finally {
      setSearchLoading(false);
    }
  }, []);

  const filterbyCategory = useCallback(
    (category) => {
      filterRecipe(category, "c");
    },
    [filterRecipe],
  );

  const filterbyArea = useCallback(
    (area) => {
      filterRecipe(area, "a");
    },
    [filterRecipe],
  );

  const handleSearch = useCallback(async (query) => {
    setSearchLoading(true);
    setSearchResults([]);

    try {
      const response = await fetch(`${API_URL}/search.php?s=${query}`);
      const data = await response.json();
     
      setSearchResults(data?.meals || []);
    } catch (error) {
      console.error("Error fetching search results:", error);
      setSearchResults([]);
    } finally {
      setSearchLoading(false);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 font-sans text-gray-100">
      <div className="min-h-screen bg-gray-950 font-sans text-gray-100 no-scrollbar">
        <Navbar searchnav={handleSearch} />
        <Cuisine filterbyArea={filterbyArea} />
        <MainRoute
          meals={searchResults}
          loading={searchLoading}
          filterbyCategory={ filterbyCategory}
        />
      </div>
    </div>
  );
};

export default App;
