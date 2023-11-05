import { BrowserRouter, Route, Routes } from "react-router-dom";
import Historial from "./Historial";
import Inicio from "./Inicio";
import "./App.css";

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
