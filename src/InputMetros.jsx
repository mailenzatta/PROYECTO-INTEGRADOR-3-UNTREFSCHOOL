import { useContext } from "react";
import { AppContext } from "./AppContext";

function InputMetros() {
  const { form, setForm } = useContext(AppContext);

  const handleChange = (event) => {
    const metrosSelected = event.target.value;

    setForm({ ...form, metrosSelected });
  };

  return (
    <>
      <label htmlFor="metros">Ingresa los metros cuadrados:</label>
      <input
        type="number"
        id="metros"
        onChange={handleChange}
        min={20}
        max={500}
      />
    </>
  );
}

export default InputMetros;
