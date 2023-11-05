import { useContext, useRef } from "react";
import { AppContext } from "./AppContext";
import Swal from "sweetalert2";
import Nav from "./Nav";
import SelectPropiedades from "./SelectPropiedades";
import SelectUbicaciones from "./SelectUbicaciones";
import InputMetros from "./InputMetros";

function Inicio() {
  const { form, setForm } = useContext(AppContext);

  const formRef = useRef();

  const costoM2 = 35.86;

  const money = new Intl.NumberFormat("es-Ar", {
    style: "currency",
    currency: "ARS",
  });

  const cotizacion = (
    parseFloat(costoM2) *
    parseFloat(form.propiedadSelected?.factor) *
    parseFloat(form.ubicacionSelected?.factor) *
    parseInt(form.metrosSelected)
  ).toFixed(2);

  const handleClick = () => {
    if (
      form.propiedadSelected &&
      form.ubicacionSelected &&
      form.metrosSelected
    ) {
      Swal.fire({
        icon: "success",
        title: "Cotización realizada con éxito",
        showConfirmButton: false,
        timer: 2500,
      }).then(() => {
        const resultado = `<p>Precio estimado: ${money.format(cotizacion)}</p>`;

        precioCotizado.innerHTML = resultado;

        Swal.fire({
          position: "top-end",
          icon: "success",
          html: "<h6>Guardado en historial</h6>",
          showConfirmButton: false,
          timer: 3500,
          width: "240px",
          toast: true,
        });
      });

      const historialEnLocalStorage = localStorage.getItem("historial");
      let historial = [];

      if (historialEnLocalStorage) {
        historial = JSON.parse(historialEnLocalStorage);
      }

      const nuevaCotizacion = {
        fecha: new Date().toLocaleString(),
        propiedad: form.propiedadSelected,
        ubicacion: form.ubicacionSelected,
        metros: form.metrosSelected,
        precio: cotizacion,
      };

      historial.push(nuevaCotizacion);

      localStorage.setItem("historial", JSON.stringify(historial));

      formRef.current.reset();
      setForm({
        propiedadSelected: "",
        ubicacionSelected: "",
        metrosSelected: "",
      });
    } else {
      Swal.fire({
        icon: "warning",
        title: "Debes completar todos los datos en pantalla",
        showConfirmButton: false,
        timer: 2500,
        width: "240px",
      });
    }
  };
  return (
    <>
      <Nav />
      <h1>Seguros del hogar</h1>
      <form ref={formRef}>
        <h2>Completa los datos solicitados</h2>
        <div>
          <SelectPropiedades />
          <SelectUbicaciones />
          <InputMetros />
        </div>
        <button type="button" onClick={handleClick}>
          Cotizar
        </button>
        <div id="precioCotizado"></div>
      </form>
    </>
  );
}
export default Inicio;
