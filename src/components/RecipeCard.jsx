import { Link } from "react-router-dom"


const RecipeCard = ({ meal }) => {
  return (
    <Link to={`/recipe/${meal.idMeal}`}>
    <div className='relative bg-gray-900 rounded-xl shadow-black/50 overflow-hidden transform transition-transform duration-300 cursor-pointer border border-gray-800 hover:shadow-lg hover:shadow-gray-600/50 hover:-translate-y-1 group w-80'>
       <div className='absolute inset-0 rounded-xl border-transparent border-2 group-hover:border-cyan-500 transition duration-500'>

        </div>
        <div className="flex justify-center item-center p-5">
          <img src={meal?.strMealThumb} alt="" className="h-60 w-60 rounded-xl border-amber-200 border group-hover:scale-105 transition duration-500" />
       </div>
      <div className="p-2 text-center  ">
        <h3 className="text-xl pb-3 font-medium text-zinc-100 mb-1 group-hover:text-cyan-200 transition duration-500">{meal?.strMeal}</h3>
      </div>
    </div>
    </Link>
  )
}

export default RecipeCard