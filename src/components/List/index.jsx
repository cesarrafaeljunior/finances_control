import { useState } from "react";
import { ButtonDefault } from "../Button";
import { Card } from "../Card";
import { NoCard } from "../NoCard";
import "./style.css";

export const FinancialList = ({ listTransation, setTransation }) => {
  const [listFiltredArray, setListFiltred] = useState(listTransation);

  const filterList = (e) => {
    if (e.target.innerText == "Todos") {
      setListFiltred(listTransation);
    } else {
      const listFiltred = listTransation.filter((elemento) => {
        return elemento.type == e.target.innerText;
      });
      setListFiltred(listFiltred);
    }
  };

  return (
    <section className="List__Financial">
      <div className="Box__List">
        <h2>Resumo fincanceiro</h2>
        <nav>
          <ButtonDefault func={filterList}>Todos</ButtonDefault>
          <ButtonDefault func={filterList}>Entrada</ButtonDefault>
          <ButtonDefault func={filterList}>Despesa</ButtonDefault>
        </nav>
      </div>
      <ul>
        {listFiltredArray.length == 0 || listTransation.length == 0 ? (
          <NoCard />
        ) : (
          listFiltredArray.map((element, i) => {
            return (
              <Card
                obj={element}
                key={i}
                listFiltredArray={listFiltredArray}
                setListFiltred={setListFiltred}
                listTransation={listTransation}
                setTransation={setTransation}
              />
            );
          })
        )}
      </ul>
    </section>
  );
};
