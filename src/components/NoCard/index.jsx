import NoCardImage from "./img/NoCard.png";
import "./style.css";

export const NoCard = () => {
  return (
    <div className="noCardImage">
      <h2>Você ainda não possui nenhum lançamento</h2>
      <img src={NoCardImage} />
    </div>
  );
};
