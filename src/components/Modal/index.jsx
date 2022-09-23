import { Button } from "../Button";
import { FinancialList } from "../List";
import "./style.css";

export const Modal = ({ setIsModalOpen }) => {
  const closeModal = () => {
    setIsModalOpen((isModalOpen) => !isModalOpen);
  };

  return (
    <section className="Container__Modal">
      <Button func={closeModal}>x</Button>
      <FinancialList />
    </section>
  );
};
