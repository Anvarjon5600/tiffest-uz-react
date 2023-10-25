import { FooterIcon, InstIcon, TelegramIcon, YouTube } from "../assets/icons";
import shape1 from "../assets/images/shape1.png";
import shape2 from "../assets/images/shape2.png";
import shape3 from "../assets/images/shape3.png";
import SectionTitle from "../components/SectionTitle";
const ContactSection = () => {
  return (
    <section className="contact__section">
      <img src={shape1} alt="shape 1" className="section__img__one" />
      <img src={shape2} alt="shape 2" className="section__img__two" />
      <img src={shape3} alt="shape 3" className="section__img__three" />
      <div className="container">
        <div className="section__header__flex">
          <SectionTitle title="Контакты" />
        </div>
        <footer>
          <ul>
            <li>
              <h5>Телефоны:</h5>
            </li>
            <li>
              <a href="+998 99 999 99 99">+998 99 999 99 99</a>
            </li>
            <li>
              <a href="+998 99 999 99 99">+998 99 999 99 99</a>
            </li>
          </ul>
          <ul>
            <li>
              <h5>Эл.почта:</h5>
            </li>
            <li>@Tiffest123.@gmail.com</li>
          </ul>
          <ul>
            <li>
              <h5>Соц. сеть:</h5>
            </li>
            <li>
              <a href="#">
                <InstIcon />
                <span>Instagram</span>
              </a>
            </li>
            <li>
              <a href="#">
                <TelegramIcon />
                <span>Telegram</span>
              </a>
            </li>
            <li>
              <a href="#">
                <FooterIcon />
                <span>Facebook</span>
              </a>
            </li>
            <li>
              <a href="#">
                <YouTube />
                <span>Yotube</span>
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <h5>Адрес:</h5>
            </li>
            <li>
              <p>+г. Ташкент ул. Чиланзар 1А, 100027</p>
            </li>
          </ul>
        </footer>
      </div>
    </section>
  );
};

export default ContactSection;
