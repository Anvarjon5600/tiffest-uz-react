import award from "../assets/images/award.webp";
import date from "../assets/totalImages/banner-date-ru-e1f89997.png";
import year from "../assets/totalImages/banner-ru-f96c4b00.png";
import bgImg from "../assets/images/svgfon.svg";
import "../assets/styles/header.css";
const Header = () => {
  return (
    <header className="header">
      <div className="header-image">
        <img src={bgImg} alt="header background" />
      </div>
      <div className="container">
        <div className="header">
          <div className="header-left left-img">
            <img className="left-img__image" src={award} alt="award img" />
          </div>
          <div className="header-right right-img">
            <img className="right-img__first" src={year} alt="year img" />
            <img className="right-img__second" src={date} alt="year img" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
