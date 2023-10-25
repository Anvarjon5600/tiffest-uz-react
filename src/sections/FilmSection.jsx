import { ArrowIcon } from "../assets/icons";
import SectionTitle from "../components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import shape1 from "../assets/images/shape1.png";
import shape2 from "../assets/images/shape2.png";
import shape3 from "../assets/images/shape3.png";
import "../assets/styles/film-section.css";
import img from "../assets/images/card_img.png";
const FilmSection = () => {
  const data = [img, img, img, img, img, img];
  return (
    <section className="film__section">
      <img src={shape1} alt="shape 1" className="section__img__one" />
      <img src={shape2} alt="shape 2" className="section__img__two" />
      <img src={shape3} alt="shape 3" className="section__img__three" />
      <div className="container">
        <div className="film__section__flex">
          <SectionTitle title="Кино за 5 дней" slot_contnent={<ArrowIcon />} />
          <button>Оставить заявку</button>
        </div>

        <h4>Кино за 5 дней</h4>
        <div className="film__section__line"></div>
        <p>
          ЭТО ОСНОВНАЯ ПРОГРАММА МОЛОДЁЖНОГО КИНОФЕСТИВАЛЯ, КОТОРАЯ ПРОЙДЁТ В
          РАМКАХ ТАШКЕНТСКОГО МЕЖДУНАРОДНОГО КИНОФЕСТИВАЛЯ «ЖЕМЧУЖИНА ШЕЛКОВОГО
          ПУТИ».{" "}
          <span style={{ color: "#EBAD2D", fontWeight: "700" }}>
            «КИНО НОВОГО ПОКОЛЕНИЯ»
          </span>{" "}
          «КИНО ЗА 5 ДНЕЙ» - КОНКУРС МОЛОДЫХ КИНЕМАТОГРАФИСТОВ, УЧАСТНИКАМ
          КОТОРОГО ПРЕДСТОИТ СНЯТЬ КОРОТКОМЕТРАЖНЫЕ ФИЛЬМЫ ОБ УЗБЕКИСТАНЕ, НА
          ТЕМУ «ВЕЛИКИЙ ШЕЛКОВЫЙ ПУТЬ» Конкурс проводит Агентство Кинематографии
          Узбекистана, ГУП «Ёшлик киностудияси» при поддержке Министерства
          Туризма и Спорта Республики Узбекистан, Министерства Иностранных Дел
          Республики Узбекистан, Министерства Финансов Республики Узбекистан,
          Всемирное Общество по изучению, сохранению и популяризации культурного
          наследия Узбекистана.
        </p>
        <h4>Короткометражные фильмы</h4>
        <div className="film__section__line"></div>
        <div className="film__section__slider">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={24}
            slidesPerView={5}
            navigation
          >
            {data.map((item, i) => {
              return (
                <SwiperSlide key={i}>
                  <div className="film__img">
                    <img src={item} alt=" img" />
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
export default FilmSection;
