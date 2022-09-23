import { ButtonDefault } from "../Button";
import { Card } from "../Card";
import "./style.css";

export const FinancialList = () => {
  return (
    <section className="List__Financial">
      <div className="Box__List">
        <h2>Resumo fincanceiro</h2>
        <nav>
          <ButtonDefault>Todos</ButtonDefault>
          <ButtonDefault>Entradas</ButtonDefault>
          <ButtonDefault>Despesas</ButtonDefault>
        </nav>
      </div>
      <ul>
        <Card />
      </ul>
    </section>
  );
};
