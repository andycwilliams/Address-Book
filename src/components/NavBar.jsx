const NavBar = () => {
  return (
    <nav className="purple darken-3" role="navigation">
      <div className="nav-wrapper">
        <a id="logo-container" href="#" className="brand-logo">
          Address Book
        </a>
        <ul className="right hide-on-med-and-down">
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

        <ul id="nav-mobile" className="sidenav">
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
        <a href="#" data-target="nav-mobile" className="sidenav-trigger">
          <i className="material-icons">menu</i>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
