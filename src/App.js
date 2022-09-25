import { useState } from "react";
import "./App.css";
import { Dashboard } from "./components/Dashboard";
import { HomePage } from "./components/HomePage";

const App = () => {
  const [loggedInUser, setLogged] = useState(false);

  return (
    <body>
      {loggedInUser ? (
        <Dashboard setLogged={setLogged} />
      ) : (
        <HomePage setLogged={setLogged} />
      )}
    </body>
  );
};

export default App;
