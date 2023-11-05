import { useContext } from "react";
import { AppContext } from "./AppContext";

function SelectUbicaciones() {
  const { ubicaciones, form, setForm } = useContext(AppContext);

  const handleChange = (event) => {
    const ubicacionSelected = ubicaciones.find(
      (ubicacion) => ubicacion.id == event.target.value
    );

    setForm({ ...form, ubicacionSelected });
  };

  return (
    <>
      <label htmlFor="ubicaciones">Selecciona su ubicación:</label>
      <select name="ubicaciones" id="ubicaciones" onChange={handleChange}>
        <option value=""></option>
        {ubicaciones.map((ubicacion) => (
          <option key={ubicacion.id} value={ubicacion.id}>
            {ubicacion.tipo}
          </option>
        ))}
      </select>
    </>
  );
}

export default SelectUbicaciones;
