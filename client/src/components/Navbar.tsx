import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = ({ pages }: { pages: Array<String> }) => {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <>
      <nav className="navbar navbar-expand-lg p-3 px-5">
        <div className="container-fluid navbar-center-align">
          <a className="navbar-brand" href="#">
            AnotaAi!
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item m-1 mx-2">
                <NavLink to={"/"} className="navLink">
                  Pagina Inicial
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
