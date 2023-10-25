import { ArrowIcon } from "../assets/icons";
import SectionTitle from "../components/SectionTitle";
import download from "../assets/images/download_icon.svg";
import ProgrammCard from "../components/ProgrammCard";
import "../assets/styles/program-section.css";
const ProgrammSection = () => {
  const titles = [
    { title: "20 сениябир 2022 год" },
    { title: "20 сениябир 2022 год" },
    { title: "20 сениябир 2022 год" },
    { title: "20 сениябир 2022 год" },
    { title: "20 сениябир 2022 год" },
    { title: "20 сениябир 2022 год" },
  ];
  return (
    <section className="programm__section">
      <div className="container">
        <div className="programm__section__flex">
          <SectionTitle title="Программа" slot_contnent={<ArrowIcon />} />
          <button>
            Скачать
            <img src={download} alt="download " />
          </button>
        </div>

        <div className="program__section__grid">
          {titles.map((item, i) => {
            return <ProgrammCard title={item.title} key={i} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default ProgrammSection;
