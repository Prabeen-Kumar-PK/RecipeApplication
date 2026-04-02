import React from 'react'
import { useParams } from 'react-router-dom'
import { API_URL, useFetch } from '../hooks/useFetch';
import { Loader } from 'lucide-react';

const RecipeDetailView = () => {
  const { id } = useParams();
  const { data, loading } = useFetch(`${API_URL}/lookup.php?i=${id}`);
  const meal = data?.meals?.[0]||[];

  if (loading)
    return (
      <div className="text-center p-8 text-gray-300">
        <Loader className="animate-spin inline-block mr-2 text-cyan-400" />
        Preparing your recipe...
      </div>
    );
  return (
    <div>RecipeDetailView</div>
  )
}

export default RecipeDetailView