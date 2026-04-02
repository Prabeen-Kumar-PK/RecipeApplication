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
      <section className="mt-2 mx-auto">
        <h2 className="text-3xl font-bold text-gray-100 mb-6 tracking-tight border-1-4 border-amber-400 pl-4 flex items-center">
          <Clock className="w-6 h-6 mr-3 text-cyan-400" />
          {title}
        </h2>

        <div style={{ width: "90%", margin: "auto", padding: "10px" }}>
          <Swiper
            spaceBetween={20}
            slidesPerView={3}
            grabCursor={true}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={false}
            modules={[Autoplay, Navigation]}
            breakpoints={{
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
