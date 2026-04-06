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
      <section className="mx-auto mt-8">
        <h2 className="mb-5 flex items-center pl-2 text-2xl font-bold tracking-tight text-gray-100 sm:pl-4 sm:text-3xl">
          <HandPlatter className="mr-2 h-5 w-5 text-cyan-400 sm:mr-3 sm:h-6 sm:w-6" />
          {title}
        </h2>

        <div className="w-full mx-auto">
          <Swiper
            spaceBetween={12}
            slidesPerView={2}
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
              0: {
                slidesPerView: 2,
              },
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
              1280: {
                slidesPerView: 5,
              },
            }}
          >
            {meals.map((meal) => (
              <SwiperSlide
                key={meal.idMeal}
                className="flex justify-center px-2 py-3 sm:px-4 sm:py-5"
              >
                <Link to={`/recipe/${meal.idMeal}`}>
                  <div className="group relative mb-2 overflow-hidden rounded-xl border border-gray-800 bg-gray-900 shadow-black/50 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-gray-600/50">
                    <div className="absolute inset-0 rounded-xl border-2 border-transparent transition duration-500 group-hover:border-cyan-500"></div>
                    <div className="flex items-center justify-center p-3 sm:p-5">
                      <img
                        src={meal?.strMealThumb}
                        alt=""
                        className="aspect-square w-24 rounded-xl border border-amber-200 object-cover transition duration-500 group-hover:scale-105 sm:w-28 md:w-32"
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
