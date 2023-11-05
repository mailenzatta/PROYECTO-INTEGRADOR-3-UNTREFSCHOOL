import { BrowserRouter, Route, Routes } from "react-router-dom";
import Historial from "./Historial";
import "./App.css";
import Inicio from "./Inicio";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Inicio} />
          <Route path="/historial" Component={Historial} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
