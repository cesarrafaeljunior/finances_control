import "./style.css";

export const Button = ({ children, func }) => {
  return (
    <button className="ButtonModal" onClick={func}>
      {children}
    </button>
  );
};

export const ButtonDefault = ({ children, func }) => {
  return (
    <button className="buttonDefault" onClick={func}>
      {children}
    </button>
  );
};

export const ButtonForm = ({ children, func }) => {
  return (
    <button type="submit" className="buttonForm" onClick={func}>
      {children}
    </button>
  );
};
