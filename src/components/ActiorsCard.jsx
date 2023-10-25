import "../assets/styles/actior-card.css";
const ActiorsCard = ({ imgUlr, actiorName }) => {
  return (
    <div className="actiors__card">
      <img src={imgUlr} alt="actior card" />
      <span>{actiorName}</span>
    </div>
  );
};
export default ActiorsCard;
