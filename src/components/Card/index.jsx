import "./style.css";
import { FaTrash } from "react-icons/fa";
export const Card = ({
  obj,
  listFiltredArray,
  setListFiltred,
  listTransation,
  setTransation,
}) => {
  const removeItem = (obj) => {
    setTransation(listTransation.filter((elemento) => elemento !== obj));
    setListFiltred(listFiltredArray.filter((elemento) => elemento !== obj));
  };

  return (
    <li className="Card">
      <div className="Card__Box__one">
        <h2>{obj.description}</h2>
        <p>{obj.type}</p>
      </div>
      <div className="Card__Box__two">
        <p>{obj.valueInput}R$</p>
        <FaTrash
          className="trash"
          onClick={() => {
            removeItem(obj);
          }}
        />
      </div>
    </li>
  );
};