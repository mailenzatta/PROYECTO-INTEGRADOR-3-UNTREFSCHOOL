import { useContext } from "react";
import { AppContext } from "./AppContext";

function SelectPropiedades() {
  const { propiedades, form, setForm } = useContext(AppContext);

  const handleChange = (event) => {
    const propiedadSelected = propiedades.find(
      (propiedad) => propiedad.id == event.target.value
    );

    setForm({ ...form, propiedadSelected });
  };

  return (
    <>
      <label htmlFor="propiedades">Selecciona el tipo de propiedad:</label>
      <select name="propiedades" id="propiedades" onChange={handleChange}>
        <option value=""></option>
        {propiedades.map((propiedad) => (
          <option key={propiedad.id} value={propiedad.id}>
            {propiedad.tipo}
          </option>
        ))}
      </select>
    </>
  );
}

export default SelectPropiedades;
