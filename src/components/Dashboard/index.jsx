import { Header } from "../Header";
import { Main } from "../Main";
import { Form } from "../Form";
import "./style.css";
import { TotalMoney } from "../TotalMoney";
import { Button } from "../Button";
import { useState } from "react";
import { Modal } from "../Modal";
import { FinancialList } from "../List";

export const Dashboard = ({ setLogged }) => {
  const [listTransation, setTransation] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <Header setLogged={setLogged} />
      <Main>
        {isModalOpen && (
          <Modal
            setIsModalOpen={setIsModalOpen}
            listTransation={listTransation}
            setTransation={setTransation}
          />
        )}
        <div>
          <Form setTransation={setTransation} />
          <Button func={openModal}>Abrir resumo</Button>
          <TotalMoney listTransation={listTransation} />
        </div>
        <FinancialList
          listTransation={listTransation}
          setTransation={setTransation}
        />
      </Main>
    </>
  );
};
