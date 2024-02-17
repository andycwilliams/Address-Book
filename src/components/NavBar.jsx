import { useEffect, useState } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
// Component Imports
import LogInModal from "./LogInModal";

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <div>
      <nav className="purple darken-3" role="navigation">
        <div className="nav-wrapper container">
          {/* TODO: Add logo */}
          <a id="logo-container" href="#" className="brand-logo">
            Address Book
          </a>

          <a href="#" data-target="nav-mobile" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>

          <ul className="right hide-on-med-and-down">
            <li>
              <a href="#!" className="modal-trigger" data-target="modal2">
                {!isLoggedIn ? "Log in" : "Sign Up"}
              </a>
            </li>
          </ul>

          <ul id="nav-mobile" className="sidenav">
            <li>
              <div className="menu-header purple darken-3 white-text center-align">
                <h5 style={{ margin: 0, padding: 10 }}>Menu</h5>
              </div>
            </li>
            <li>
              <a
                href="#!"
                className="waves-effect waves-light btn modal-trigger purple white-text"
                data-target="modal2"
              >
                {!isLoggedIn ? "Log in" : "Sign Up"}
              </a>
            </li>
            <li>
              <p>Test</p>
            </li>
            <li>
              <a
                href="#!"
                className="waves-effect waves-purple btn-small btn-flat white purple-text"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#!"
                className="waves-effect waves-purple btn-small btn-flat white purple-text"
              >
                News
              </a>
            </li>
            <li>
              <a
                href="#!"
                className="waves-effect waves-purple btn-small btn-flat white purple-text"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#!"
                className="waves-effect waves-purple btn-small btn-flat white purple-text"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <LogInModal />
    </div>
  );
};

export default NavBar;
