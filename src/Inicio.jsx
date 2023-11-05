import Cotizador from "./Cotizador";
import InputMetros from "./InputMetros";
import SelectPropiedades from "./SelectPropiedades";
import SelectUbicaciones from "./SelectUbicaciones";
import Nav from "./Nav";

function Inicio() {
  return (
    <>
      <Nav />
      <h1>Seguros del hogar</h1>
      <form>
        <h2>Completa los datos solicitados</h2>
        <SelectPropiedades />
        <SelectUbicaciones />
        <InputMetros />
        <Cotizador />
      </form>
    </>
  );
}

export default Inicio;
