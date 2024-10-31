import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./components/Main";
import { useContext } from "react";
import { ThemeContext } from "./Theme";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <Router>
        <Main />
      </Router>
    </>
  );
}

export default App;
