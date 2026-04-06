import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeView from "../components/HomeView";
import ReceipeDetailView from "../components/RecipeDetailView";
import SearchView from "../components/SearchView";
import CategoryView from "../components/CategoryView";
import AreaView from "../components/AreaView";


const MainRoute = ({ meals, loading, filterbyCategory }) => {
  return (
    <>
      <div >
        <Routes>
          <Route path="/" element={<HomeView filterbyCategory={filterbyCategory} />} />
          <Route path="/recipe/:id" element={<ReceipeDetailView />} />
          <Route path="/search/:query" element={<SearchView  meals={meals} loading={loading} />} />
          <Route path="/category/:category" element={<CategoryView meals={meals} loading={loading}/>} />
          <Route path="/area/:area" element={<AreaView  meals={meals} loading={loading} />} />
        </Routes>
      </div>
    </>
  );
};

export default MainRoute;
