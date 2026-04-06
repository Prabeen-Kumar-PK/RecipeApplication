// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { useFetch } from "../hooks/useFetch";
import RecipeCard from "./RecipeCard";
import { Clock, Loader } from "lucide-react";

const RecipeSlider = ({ title, fetchUrl }) => {
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
      <section className="mx-auto mt-6">
        <h2 className="mb-5 flex items-center gap-2 pl-2 text-2xl font-bold tracking-tight text-gray-100 sm:pl-4 sm:text-3xl">
          <Clock className="mr-1 h-5 w-5 text-cyan-400 sm:mr-3 sm:h-6 sm:w-6" />
          {title}
        </h2>

        <div className="mx-auto w-full px-1 sm:px-2">
          <Swiper
            spaceBetween={16}
            slidesPerView={1}
            grabCursor={true}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={false}
            modules={[Autoplay, Navigation]}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {meals.map((meal) => (
              <SwiperSlide key={meal.idMeal} className="p-2">
                <RecipeCard meal={meal} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default RecipeSlider;
