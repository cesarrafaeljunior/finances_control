import "./style.css";

export const Button = ({ children, func }) => {
  return <button onClick={func}>{children}</button>;
};

export const ButtonDefault = ({ children }) => {
  return <button className="buttonDefault">{children}</button>;
};
