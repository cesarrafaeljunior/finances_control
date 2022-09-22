import { Button } from "../Button";
import { Container } from "../Container";
import Logo from "./Img/illustration.svg";
import "./style.css";

export const HomePage = (props) => {
  return (
    <div className="Box__Main">
      <Container>
        <section className="Section__Infos">
          <div className="Box__Title">
            <span>Nu</span>
            <h1>Kenzie</h1>
          </div>
          <div className="Box__Description">
            <p>Centralize o controle das suas finanças</p>
          </div>
          <span>de forma rápida e segura</span>
          <Button type="button">Iniciar</Button>
        </section>
        <section className="Section__Logo">
          <img src={Logo} alt="" />
        </section>
      </Container>
    </div>
  );
};
