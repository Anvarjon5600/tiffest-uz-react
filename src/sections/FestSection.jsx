import logo from "../assets/images/logo.png";
import "../assets/styles/fest.css";
import shape1 from "../assets/images/shape1.png";
import shape2 from "../assets/images/shape2.png";
import shape3 from "../assets/images/shape3.png";
const FestSection = () => {
  return (
    <section className="fest__section">
      <img src={shape1} alt="shape 1" className="section__img__one" />
      <img src={shape2} alt="shape 2" className="section__img__two" />
      <img src={shape3} alt="shape 3" className="section__img__three" />
      <div className="container">
        <div>
          <h2>TIFFEST-2022</h2>
          <h4>TIFFEST-2022</h4>

          <div className="fest__line"></div>
          <div className="fest__flex">
            <p>
              XIV Ташкентский международный кинофестиваль (далее - Фестиваль)
              проводится в целях сохранения и развития вековых традиций
              национального киноискусства, дальнейшего развития культурно-
              просветительской деятельности в Республике Узбекистан и развития
              культурных связей на международном уровне, воспитания патриотизма,
              укрепления дружбы и братства между народами, расширения масштабов
              творческого сотрудничества различных стран, возрождения
              прославленного Ташкентского международного кинофестиваля, а также
              обеспечения исполнения Указа Президента Республики Узбекистан от 7
              апреля 2021 года № УП-6202 «О мерах по поднятию киноискусства и
              киноиндустрии на качественно новый уровень и дальнейшему
              совершенствованию системы государственной поддержки отрасли».
            </p>
            <div className="fest__img">
              <img src={logo} alt="fest logo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FestSection;
