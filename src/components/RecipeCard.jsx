import { Link } from "react-router-dom"


const RecipeCard = ({ meal }) => {
  return (
    <Link to={`/recipe/${meal.idMeal}`} className="block w-full">
    <div className='group relative w-full overflow-hidden rounded-xl border border-gray-800 bg-gray-900 shadow-black/50 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-gray-600/50'>
       <div className='absolute inset-0 rounded-xl border-2 border-transparent transition duration-500 group-hover:border-cyan-500'>

        </div>
        <div className="flex items-center justify-center p-4 sm:p-5">
          <img src={meal?.strMealThumb} alt="" className="aspect-square w-full max-w-[240px] rounded-xl border border-amber-200 object-cover transition duration-500 group-hover:scale-105" />
       </div>
      <div className="p-3 text-center sm:p-4">
        <h3 className="mb-1 line-clamp-2 pb-2 text-lg font-medium text-zinc-100 transition duration-500 group-hover:text-cyan-200 sm:text-xl">{meal?.strMeal}</h3>
      </div>
    </div>
    </Link>
  )
}

export default RecipeCard
