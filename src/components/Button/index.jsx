import "./style.css";

export const Button = ({ children }) => {
  return <button>{children}</button>;
};

export const ButtonDefault = ({ children }) => {
  return <button className="buttonDefault">{children}</button>;
};
