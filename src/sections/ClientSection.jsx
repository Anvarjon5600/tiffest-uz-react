import SectionTitle from "../components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import img from "../assets/images/client-img.png";
import img2 from "../assets/images/client-img2.png";
import "../assets/styles/client-section.css";
const ClientSection = () => {
  const data = [img, img2, img, img2, img, img2, img, img2, img, img2];
  return (
    <section className="client__section">
      <div className="container">
        <div className="section__header__flex">
          <SectionTitle title="Наши партнеры" />
        </div>

        <div className="client__slider">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={24}
            slidesPerView={7}
            navigation
          >
            {data.map((item, i) => {
              return (
                <SwiperSlide key={i}>
                  <div>
                    <img src={item} alt="img " />
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
export default ClientSection;
