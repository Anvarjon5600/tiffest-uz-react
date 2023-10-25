import SectionTitle from "../components/SectionTitle";
import img from "../assets/images/location.png";
import shape1 from "../assets/images/shape1.png";
import shape2 from "../assets/images/shape2.png";
import shape3 from "../assets/images/shape3.png";
import "../assets/styles/location-section.css";
const LocationSection = () => {
  return (
    <section className="location__section">
      <img src={shape1} alt="shape 1" className="section__img__one" />
      <img src={shape2} alt="shape 2" className="section__img__two" />
      <img src={shape3} alt="shape 3" className="section__img__three" />
      <div className="container">
        <div className="section__header__flex">
          <SectionTitle title="Локации" />
        </div>
        <h5>Ташкентская область</h5>
        <div className="location__section__line"></div>
        <div className="location__section__flex">
          <div>
            <p>
              Расположена на северо-западе Узбекистана, между частью
              Тянь-Шанских гор и рекой Сырдарья. Удобное географическое
              расположение говорит о большом экотуристическом потенциале
              области.Особого внимания заслуживают районы и города Бостанлык,
              Паркент, Зангиота, Ангрен и Алмалык, которые являются лидерами в
              сфере туризма. Чарвакское водохранилице, Угам-Чаткальский
              природный парк и всесезонный горный курорт Амирсой- что может быть
              лучше для того чтобы вдохновляться красотой природы.
            </p>
            <a href="#">
              Адрес:<span> г. Ташкент ул. Чиланзар 1А, 100027 </span>
            </a>
          </div>
          <div>
            <img src={img} alt="img" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default LocationSection;
