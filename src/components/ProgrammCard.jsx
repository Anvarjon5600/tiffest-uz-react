import { ArrowIcon } from "../assets/icons";
import "../assets/styles/programm-card.css";
const ProgrammCard = ({ title }) => {
  return (
    <div className="programm__card">
      <h3 className="card__title">{title}</h3>
      <div className="programm__card__flex">
        <p>Количество событие</p>
        <span>16</span>
      </div>
      <div className="card__line"></div>
      <div className="card__bottom__flex">
        <p>Показать события</p>
        <ArrowIcon />
      </div>
    </div>
  );
};
export default ProgrammCard;
