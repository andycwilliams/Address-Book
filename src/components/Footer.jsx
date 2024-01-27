const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="page-footer purple darken-3">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Address Book</h5>
            <p className="grey-text text-lighten-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              perspiciatis iusto eligendi. Corporis sit tempora, nulla
              voluptatem ex magni beatae exercitationem dolore odit minus
              eveniet ducimus rerum nam similique maxime ad fuga deserunt modi
              atque facilis qui ut, nobis aliquid!
            </p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Links</h5>
            <ul>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  Link 1
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  Link 2
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  Link 3
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  Link 4
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright purple darken-4">
        <div className="container">
          &copy; {currentYear} Address Book. All rights reserved.
          <a className="grey-text text-lighten-4 right" href="#!">
            More Links
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
