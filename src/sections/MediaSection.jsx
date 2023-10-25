import SectionTitle from "../components/SectionTitle";
import img1 from "../assets/images/media_img.png";
import img2 from "../assets/images/media_img2.png";
import shape1 from "../assets/images/shape1.png";
import shape2 from "../assets/images/shape2.png";
import shape3 from "../assets/images/shape3.png";
import "../assets/styles/media-section.css";
const MediaSection = () => {
  return (
    <section className="media__section">
      <img src={shape1} alt="shape 1" className="section__img__one" />
      <img src={shape2} alt="shape 2" className="section__img__two" />
      <img src={shape3} alt="shape 3" className="section__img__three" />
      <div className="container">
        <div className="actiors__section__flex">
          <SectionTitle title="Медиа" />
          <select>
            <option value="1">2023</option>
            <option value="1">2022</option>
            <option value="1">2020</option>
            <option value="1">2018</option>
          </select>
        </div>

        <div className="media__title__flex">
          <p>Фотографии</p>
          <p>Смотереть</p>
        </div>
        <div className="media__section__line"></div>

        <div className="media__section__grid__one">
          <div className="grid__one__item-1 grid__item">
            <img src={img1} alt=" img 1" />
          </div>
          <div className="grid__one__item-2 grid__item">
            <img src={img1} alt=" img 1" />
          </div>
          <div className="grid__one__item-3 grid__item">
            <img src={img1} alt=" img 1" />
          </div>
          <div className="grid__one__item-4 grid__item">
            <img src={img2} alt=" img 1" />
          </div>
          <div className="grid__one__item-5 grid__item">
            <img src={img1} alt=" img 1" />
          </div>
          <div className="grid__one__item-6 grid__item">
            <img src={img2} alt=" img 1" />
          </div>
          <div className="grid__one__item-7 grid__item">
            <img src={img1} alt=" img 1" />
          </div>
          <div className="grid__one__item-8 grid__item">
            <img src={img2} alt=" img 1" />
          </div>
          <div className="grid__one__item-9 grid__item">
            <img src={img2} alt=" img 1" />
          </div>
        </div>

        <div className="media__title__flex">
          <p>Фотографии</p>
          <p>Смотереть</p>
        </div>
        <div className="media__section__line"></div>
        <div className="media__section__grid__two">
          <div className="grid__two__item-1 grid__item2">
            <img src={img1} alt=" img 1" />
          </div>
          <div className="grid__two__item-2 grid__item2">
            <img src={img1} alt=" img 1" />
          </div>
          <div className="grid__two__item-3 grid__item2">
            <img src={img1} alt=" img 1" />
          </div>
          <div className="grid__two__item-4 grid__item2">
            <img src={img2} alt=" img 1" />
          </div>
          <div className="grid__two__item-5 grid__item2">
            <img src={img1} alt=" img 1" />
          </div>
          <div className="grid__two__item-6 grid__item2">
            <img src={img2} alt=" img 1" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default MediaSection;
