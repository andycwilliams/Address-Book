import { useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

const SideNav = () => {
  useEffect(() => {
    let sidenav = document.querySelector("#sidenav-slide");
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
          <p>Menu</p>
        </li>
        <li>
          <a href="#item1">Item 1</a>
        </li>
        <li>
          <a href="#item2">Item 2</a>
        </li>
        <li>
          <a href="#item3">Item 3</a>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
