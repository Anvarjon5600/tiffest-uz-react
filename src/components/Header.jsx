import award from "../assets/images/award.png";
import year from "../assets/images/ENG 1.png";
import bgImg from "../assets/images/svgfon.svg";
import "../assets/styles/header.css";
const Header = () => {
  return (
    <header className="header">
      <div className="header-image">
        <img src={bgImg} alt="header background" />
      </div>
      <div className="container">
        <div className="header__flex">
          <div className="header__left__side">
            <img src={award} alt="award img" />
          </div>
          <div className="header__right__side">
            <img src={year} alt="year img" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
