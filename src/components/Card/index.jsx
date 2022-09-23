import "./style.css";
import { FaTrash } from "react-icons/fa";
export const Card = () => {
  return (
    <li className="Card">
      <div className="Card__Box__one">
        <h2>Salário - Mês Dezembro</h2>
        <p>Entrada</p>
      </div>
      <div className="Card__Box__two">
        <p>R$ 6.660,00</p>
        <FaTrash className="trash" />
      </div>
    </li>
  );
};
