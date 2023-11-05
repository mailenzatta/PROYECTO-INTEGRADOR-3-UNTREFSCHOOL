import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <img src="inicio.png" alt="inicio" id="icono" />
            </Link>
          </li>
          <li>
            <Link to="/historial">
              <img src="historial.png" alt="historial" id="icono" />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
