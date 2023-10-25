import ProgrammCard from "../components/ProgrammCard";
import SectionTitle from "../components/SectionTitle";
import shape1 from "../assets/images/shape1.png";
import shape2 from "../assets/images/shape2.png";
import shape3 from "../assets/images/shape3.png";
import "../assets/styles/master-class.css";
const MasterClass = () => {
  const data = [
    "20 сениябир 2022 год",
    "20 сениябир 2022 год",
    "20 сениябир 2022 год",
    "20 сениябир 2022 год",
    "20 сениябир 2022 год",
    "20 сениябир 2022 год",
  ];
  return (
    <section className="master__class__section">
      <img src={shape1} alt="shape 1" className="section__img__one" />
      <img src={shape2} alt="shape 2" className="section__img__two" />
      <img src={shape3} alt="shape 3" className="section__img__three" />
      <div className="container">
        <div className="section__header__flex">
          <SectionTitle title="Мастер-класс" />
        </div>

        <div className="master__class__grid">
          {data.map((item, i) => (
            <ProgrammCard title={item} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MasterClass;
