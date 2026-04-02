import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeView from "../components/HomeView";
import ReceipeDetailView from "../components/RecipeDetailView";


const MainRoute = () => {
  return (
    <>
      <div >
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/recipe/:id" element={<ReceipeDetailView />} />
        </Routes>
      </div>
    </>
  );
};

export default MainRoute;
