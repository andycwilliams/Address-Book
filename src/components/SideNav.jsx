import { useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

const SideNav = () => {
  useEffect(() => {
    const sidenav = document.querySelector("#sidenav-slide");
    M.Sidenav.init(sidenav, {});
  }, []);

  return (
    <div>
      <nav>
        <a
          href="#"
          data-target="sidenav-slide"
          className="sidenav-trigger show-on-large"
        >
          <i className="material-icons">menu</i>
        </a>
        {/* <ul> SideNav stuff </ul> */}
      </nav>
      <ul id="sidenav-slide" className="sidenav">
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
    </div>
  );
};

export default SideNav;
