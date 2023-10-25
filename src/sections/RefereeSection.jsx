import SectionTitle from "../components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import ActiorsCard from "../components/ActiorsCard";
import "swiper/css/navigation";
import "swiper/css";
import img from "../assets/images/card_img.png";
import "../assets/styles/referee-section.css";

const RefereeSection = () => {
  const data = [
    { img: img, name: "Жораев Темур" },
    { img: img, name: "Жораев Темур" },
    { img: img, name: "Жораев Темур" },
    { img: img, name: "Жораев Темур" },
    { img: img, name: "Жораев Темур" },
    { img: img, name: "Жораев Темур" },
  ];

  return (
    <section className="referee__section">
      <div className="container">
        <div className="history__section__flex">
          <SectionTitle title="Жюри" />
        </div>

        <div className="referee__section__slider">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={24}
            slidesPerView={4}
            navigation
          >
            {data.map((item, i) => {
              return (
                <SwiperSlide key={i}>
                  <ActiorsCard imgUlr={item.img} actiorName={item.name} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default RefereeSection;
