import { useState } from "react";
import { ButtonDefault } from "../Button";
import { Card } from "../Card";
import { NoCard } from "../NoCard";
import "./style.css";

export const FinancialList = ({
  listTransation,
  setTransation,
  listFiltredArray,
  setListFiltred,
}) => {
  const filterList = (e) => {
    if (e.target.innerText == "Todos") {
      setTransation(listFiltredArray);
    } else {
      setTransation(
        listFiltredArray.filter((elemento) => {
          return elemento.type == e.target.innerText;
        })
      );
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
        {listTransation.length > 0 ? (
          listTransation.map((element, i) => {
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
        ) : (
          <NoCard />
        )}
      </ul>
    </section>
  );
};
