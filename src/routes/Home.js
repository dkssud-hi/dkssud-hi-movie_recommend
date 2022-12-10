import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsFillDoorOpenFill, BsFillDoorClosedFill } from "react-icons/bs";

import Roading from "../components/Roading";
import ListMovie from "../components/ListMovie";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "../css/home.css";
import "../css/movie.css";
import { EffectCube, Pagination, Autoplay } from "swiper";

function Home() {
  const [loading, setLoading] = useState(true);
  const [popularMovies, setPopularMovies] = useState([]);

  const getPopularMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?sort_by=rating&sort_by=year`
      )
    ).json();

    setPopularMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getPopularMovies();
  }, []);

  return (
    <div id="home_div" className="main">
      {loading ? (
        <Roading />
      ) : (
        <div className="movie_box">
          <Swiper
            effect={"cube"}
            preventClicks={false}
            preventClicksPropagation={false}
            grabCursor={false}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            speed={5000}
            loop={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            pagination={true}
            modules={[EffectCube, Autoplay]}
          >
            {popularMovies.map((movie) => (
              <SwiperSlide key={movie.id}>
                <ListMovie
                  key={movie.id}
                  title={movie.title}
                  image={movie.large_cover_image}
                  id={movie.id}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="detail_link">
            <Link
              style={{
                textDecoration: "none",
              }}
              to="/Genre"
            >
              <div className="icon_box">
                <div className="before_information">Open The Door</div>
                <div className="after_information">More Genre</div>
                <BsFillDoorOpenFill className="open_door" size="50" />
                <BsFillDoorClosedFill className="close_door" size="50" />
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
