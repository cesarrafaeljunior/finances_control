import "./style.css";
export const TotalMoney = ({ listTransation }) => {
  const total = listTransation.reduce((valAnt, acc) => {
    if (acc.type == "Entrada") {
      return Number(acc.valueInput) + Number(valAnt);
    } else {
      return valAnt;
    }
  }, 0);

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
