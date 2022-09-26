import { Header } from "../Header";
import { Main } from "../Main";
import { Form } from "../Form";
import "./style.css";
import { TotalMoney } from "../TotalMoney";
import { Button } from "../Button";
import { useState } from "react";
import { Modal, ModalCredentials } from "../Modal";
import { FinancialList } from "../List";

export const Dashboard = ({ setLogged }) => {
  const [listTransation, setTransation] = useState([]);
  const [listFiltredArray, setListFiltred] = useState([]);
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
          <Form
            listTransation={listTransation}
            setTransation={setTransation}
            listFiltredArray={listFiltredArray}
            setListFiltred={setListFiltred}
          />
          <Button func={openModal}>Abrir resumo</Button>
          <TotalMoney listFiltredArray={listFiltredArray} />
        </div>
        <FinancialList
          listTransation={listTransation}
          setTransation={setTransation}
          listFiltredArray={listFiltredArray}
          setListFiltred={setListFiltred}
        />
      </Main>
    </>
  );
};
