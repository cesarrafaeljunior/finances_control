import { useState } from "react";
import "./App.css";
import { Dashboard } from "./components/Dashboard";
import { HomePage } from "./components/HomePage";
import { Main } from "./components/Main";

const App = () => {
  const [loggedInUser, setLogged] = useState(false);

  console.log(loggedInUser);
  return (
    <Main>
      {loggedInUser ? <Dashboard /> : <HomePage setLogged={setLogged} />}
    </Main>
  );
};

export default App;
