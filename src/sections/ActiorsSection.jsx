import shape1 from "../assets/images/shape1.png";
import shape2 from "../assets/images/shape2.png";
import shape3 from "../assets/images/shape3.png";
import ActiorsCard from "../components/ActiorsCard";
import SectionTitle from "../components/SectionTitle";
import img from "../assets/images/actior.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "../assets/styles/actior-section.css";
import "swiper/css/navigation";
import "swiper/css";
const ActiorsSection = () => {
  const data = [
    {
      img: img,
      desc: "Алдияр Байракимов",
    },
    {
      img: img,
      desc: "Аяз Салаев",
    },
    {
      img: img,
      desc: "Артём Михалков",
    },
    {
      img: img,
      desc: "Гульбара Толомушова,",
    },
    {
      img: img,
      desc: "Гульбара Толомушова",
    },
  ];
  return (
    <section className="actiors__section">
      <img src={shape1} alt="shape 1" className="section__img__one" />
      <img src={shape2} alt="shape 2" className="section__img__two" />
      <img src={shape3} alt="shape 3" className="section__img__three" />

      <div className="container">
        <div className="actiors__section__flex">
          <SectionTitle title="Лица" />
          <select>
            <option value="1">Алжирская Народная Демократическ...</option>
            <option value="1">Lorem, ipsum dolor.</option>
            <option value="1">Lorem ipsum dolor sit amet.</option>
            <option value="1">Алжирская Народная...</option>
          </select>
        </div>

        <div>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={45}
            slidesPerView={4}
            navigation
          >
            {data.map((item, i) => {
              return (
                <SwiperSlide key={i}>
                  <ActiorsCard imgUlr={item.img} actiorName={item.desc} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
export default ActiorsSection;
