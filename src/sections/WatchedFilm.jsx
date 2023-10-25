import SectionTitle from "../components/SectionTitle";
import { Swiper, SwiperSlide, SwiperContainer } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import "../assets/styles/watched-film.css";
import img from "../assets/images/card_img.png";
const WatchedFilm = () => {
  const data = [img, img, img, img, img, img];
  return (
    <section className="watched__film__section">
      <div className="container">
        <div className="watched__film__flex">
          <SectionTitle title="Кинопоказы" />
          <select>
            <option value="1">Алжирская Народная Демократическ...</option>
            <option value="1">Lorem, ipsum dolor.</option>
            <option value="1">Lorem ipsum dolor sit amet.</option>
            <option value="1">Алжирская Народная...</option>
          </select>
        </div>

        <div className="watched__film__slider">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={24}
            slidesPerView={4}
            navigation
          >
            {data.map((item, i) => {
              return (
                <SwiperSlide key={i}>
                  <div className="watched__film__card">
                    <img src={item} alt="card" />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default WatchedFilm;
