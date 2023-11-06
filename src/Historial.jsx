import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import Swal from "sweetalert2";

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

  const handleClick = () => {
    if (historialCotizaciones.length > 0) {
      Swal.fire({
        title: "¿Estás seguro?",
        html: "<h6>¡No podrás revertirlo!</h6>",
        icon: "warning",
        showCancelButton: true,
        cancelButtonText: "<h3 class='bx bx-x'></h3>",
        confirmButtonColor: "#9b4dca",
        cancelButtonColor: "#e65959",
        confirmButtonText: "<h3 class='bx bx-check'</h3>",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "¡Eliminado!",
            html: "<h6>Tu historial fue eliminado.</h6>",
            icon: "success",
            showConfirmButton: false,
            timer: 2500,
          });
          localStorage.removeItem("historial");
          setHistorialCotizaciones([]);
        }
      });
    } else {
      Swal.fire({
        position: "top-end",
        icon: "warning",
        html: "<h6>El historial está vacío</h6>",
        showConfirmButton: false,
        showCloseButton: true,
        timer: 3500,
        width: "260px",
        toast: true,
      });
    }
  };

  const eliminarCotizacion = (index) => {
    Swal.fire({
      title: "¿Estás seguro?",
      html: "<h6>¡No podrás revertirlo!</h6>",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "<h3 class='bx bx-x'></h3>",
      confirmButtonColor: "#9b4dca",
      cancelButtonColor: "#e65959",
      confirmButtonText: "<h3 class='bx bx-check'</h3>",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "¡Eliminado!",
          html: "<h6>Tu cotización fue eliminada.</h6>",
          icon: "success",
          showConfirmButton: false,
          timer: 2500,
        });
        const nuevasCotizaciones = [...historialCotizaciones];
        nuevasCotizaciones.splice(index, 1);
        setHistorialCotizaciones(nuevasCotizaciones);

        localStorage.setItem("historial", JSON.stringify(nuevasCotizaciones));
      }
    });
  };

  return (
    <>
      <Nav />
      <h1>Historial</h1>
      <div className="div-cotizador">
        <table>
          <thead>
            <tr>
              <th>Fecha de cotización</th>
              <th>Propiedad</th>
              <th>Ubicación</th>
              <th>Metros cuadrados</th>
              <th>Póliza mensual</th>
              <th>-</th>
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
                <td>
                  <i
                    className="bx bx-trash"
                    onClick={() => eliminarCotizacion(index)}
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div id="botonesHistorial">
          <Link to="/">
            <button>Volver</button>
          </Link>
          <button onClick={handleClick}>Limpiar</button>
        </div>
      </div>
    </>
  );
}

export default Historial;
