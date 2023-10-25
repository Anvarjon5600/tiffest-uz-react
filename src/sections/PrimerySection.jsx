import SectionTitle from "../components/SectionTitle";
import { Swiper, SwiperSlide, SwiperContainer } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import img from "../assets/images/card_img.png";
import "../assets/styles/primery-section.css";
const PrimerySection = () => {
  const data = [img, img, img, img, img, img];

  return (
    <section className="primery__section">
      <div className="container">
        <SectionTitle title="Кинопоказы" />

        <div className="primery__section__slider">
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

export default PrimerySection;
