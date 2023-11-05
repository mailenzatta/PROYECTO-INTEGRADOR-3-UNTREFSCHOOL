import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [propiedades, setPropiedades] = useState([]);
  const [ubicaciones, setUbicaciones] = useState([]);

  const [form, setForm] = useState({});

  useEffect(() => {
    fetch("https://653831aaa543859d1bb14d53.mockapi.io/propiedades")
      .then((response) => response.json())
      .then((propiedades) => setPropiedades(propiedades));
  }, []);

  useEffect(() => {
    fetch("https://653831aaa543859d1bb14d53.mockapi.io/ubicaciones")
      .then((response) => response.json())
      .then((ubicaciones) => setUbicaciones(ubicaciones));
  }, []);

  const data = { propiedades, ubicaciones, form, setForm };

  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
};
