// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { useFetch } from "../hooks/useFetch";
import RecipeCard from "./RecipeCard";
import { HandPlatter, Loader } from "lucide-react";
import { Link } from "react-router-dom";

const TrendingRecipe = ({ title, fetchUrl }) => {
  const { data, loading } = useFetch(fetchUrl);

  const meals = data?.meals || [];

  if (loading)
    return (
      <div className="text-center p-8 text-gray-300">
        <Loader className="animate-spin inline-block mr-2 text-cyan-400" />
        Loading {title}...
      </div>
    );
  return (
    <>
      <section className="mt-2 mx-auto">
        <h2 className="text-3xl font-bold text-gray-100 mb-6 tracking-tight border-1-4 border-amber-400 pl-4 flex items-center">
          <HandPlatter className="w-6 h-6 mr-3 text-cyan-400" />
          {title}
        </h2>

        <div className="w-full mx-auto">
          <Swiper
            spaceBetween={10}
            slidesPerView={4}
            grabCursor={true}
            loop={true}
            autoplay={{
              delay: 100,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={false}
            modules={[Autoplay, Navigation]}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 6,
              },
            }}
          >
            {meals.map((meal) => (
              <SwiperSlide
                key={meal.idMeal}
                className="px-10 flex justify-center py-5"
              >
                <Link to={`/recipe/${meal.idMeal}`}>
                  <div className="relative bg-gray-900 rounded-xl shadow-black/50 overflow-hidden transform transition-transform duration-300 cursor-pointer border border-gray-800 hover:shadow-lg hover:shadow-gray-600/50 hover:-translate-y-1 group w-fit h-fit mb-5">
                    <div className="absolute inset-0 rounded-xl border-transparent border-2 group-hover:border-cyan-500 transition duration-500"></div>
                    <div className="flex justify-center item-center p-5">
                      <img
                        src={meal?.strMealThumb}
                        alt=""
                        className="h-30 w-30 rounded-xl border-amber-200 border group-hover:scale-105 transition duration-500"
                      />
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default TrendingRecipe;
