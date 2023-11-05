import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";

function Historial() {
  const [historialCotizaciones, setHistorialCotizaciones] = useState([]);

  useEffect(() => {
    const datosLocalStorage = localStorage.getItem("historial");
    if (datosLocalStorage) {
      const cotizaciones = JSON.parse(datosLocalStorage);
      setHistorialCotizaciones(cotizaciones);
    }
  }, []);

  const money = new Intl.NumberFormat("es-Ar", {
    style: "currency",
    currency: "ARS",
  });

  return (
    <>
      <Nav />
      <h1>Historial</h1>
      <div className=" center div-cotizador">
        <table>
          <thead>
            <tr>
              <th>Fecha de cotización</th>
              <th>Propiedad</th>
              <th>Ubicación</th>
              <th>Metros cuadrados</th>
              <th>Póliza mensual</th>
            </tr>
          </thead>

          <tbody>
            {historialCotizaciones.map((cotizacion, index) => (
              <tr key={index}>
                <td>{cotizacion.fecha}</td>
                <td>{cotizacion.propiedad?.tipo}</td>
                <td>{cotizacion.ubicacion?.tipo}</td>
                <td>{cotizacion.metros}</td>
                <td>{money.format(cotizacion.precio)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="center separador">
          <Link to="/" id="botonVolver">
            Volver
          </Link>
        </div>
      </div>
    </>
  );
}

export default Historial;
