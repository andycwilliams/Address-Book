import { useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

const SideNav = () => {
  useEffect(() => {
    const sidenav = document.querySelector("#nav-mobile");
    M.Sidenav.init(sidenav, {});
  }, []);

  return (
    <div>
      <a
        href="#"
        data-target="nav-mobile"
        className="sidenav-trigger show-on-large"
      >
        <i className="material-icons">menu</i>
      </a>
    </div>
  );
};

export default SideNav;

<div>
  <nav>
    <a
      href="#"
      data-target="nav-mobile"
      className="sidenav-trigger show-on-large"
    >
      <i className="material-icons">menu</i>
    </a>
  </nav>
  <ul id="nav-mobile" className="sidenav">
    <li>
      <h5>Menu</h5>
    </li>
    <li>
      <a href="#">Log in</a>
    </li>
    <li>
      <a href="#">Sign up</a>
    </li>
    <li>
      <a href="#">Privacy policy</a>
    </li>
  </ul>
</div>;
