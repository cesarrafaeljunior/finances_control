import { ButtonForm } from "../Button";
import "./style.css";

export const Form = () => {
  return (
    <form>
      <div className="Box__Form__Header">
        <label htmlFor="">Descrição</label>
        <input type="text" placeholder="Digite aqui sua descrição" />
        <p>Ex: Compra de roupas</p>
      </div>
      <div className="Box__Form__Main">
        <div className="Box__input">
          <label htmlFor="">Valor</label>
          <input type="text" placeholder="1" />
          <p>R$</p>
        </div>
        <div className="Box__Select">
          <label htmlFor="">Tipo de valor</label>
          <select name="" id="">
            <option value="">Tipo de entrada</option>
            <option value="">Entrada</option>
            <option value="">Saída</option>
          </select>
        </div>
      </div>
      <ButtonForm> Inserir valor</ButtonForm>
    </form>
  );
};
