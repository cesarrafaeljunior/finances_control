import "./style.css";
export const TotalMoney = ({ listFiltredArray }) => {
  const total = listFiltredArray.reduce(
    (valAnt, acc) =>
      acc.type == "Entrada"
        ? valAnt + Number(acc.valueInput)
        : valAnt - Number(acc.valueInput),
    0
  );

  return (
    <section className="Section__Total__Money">
      <div>
        <h3>Valor total:</h3>
        <p>O valor se refere ao saldo</p>
      </div>
      <h2>R$ {total}</h2>
    </section>
  );
};
