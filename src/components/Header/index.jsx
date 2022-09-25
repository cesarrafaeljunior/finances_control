import { ButtonDefault } from "../Button";
import "./style.css";
export const Header = ({ setLogged }) => {
  const goToHomePage = () => {
    setLogged((login) => !login);
  };

  return (
    <header>
      <section className="Container__Section">
        <div>
          <div className="Box__Title__Header">
            <span>Nu</span>
            <h1>Kenzie</h1>
          </div>
        </div>
        <div>
          <ButtonDefault func={goToHomePage}>Inicio</ButtonDefault>
        </div>
      </section>
    </header>
  );
};
