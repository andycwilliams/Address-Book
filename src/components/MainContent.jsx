// Component Imports
import UploadFormModal from "./UploadFormModal";

const SearchBar = () => {
  return (
    <div className="nav-wrapper">
      <form>
        <div className="input-field">
          <input id="search" type="search" placeholder="Search..." required />
          <label className="label-icon" htmlFor="search">
            <i className="material-icons">search</i>
          </label>
          <i className="material-icons">close</i>
        </div>
      </form>
    </div>
  );
};

const UploadButtons = () => {
  return (
    <>
      {/* Desktop Button */}
      <div className="hide-on-small-only">
        <button
          className="waves-effect waves-light btn modal-trigger red darken-2"
          href="#modal1"
        >
          Upload
          <i className="material-icons right">add</i>
        </button>
        <button className="waves-effect waves-light btn red darken-2 disabled">
          New folder
          <i className="material-icons right">create_new_folder</i>
        </button>
      </div>

      {/* FAB */}
      <div
        className="hide-on-med-and-up"
        style={{ position: "fixed", bottom: "20px", right: "20px" }}
      >
        <a
          className="waves-effect waves-light btn-floating btn-large modal-trigger red darken-2"
          href="#modal1"
        >
          <i className="material-icons">add</i>
        </a>
      </div>
    </>
  );
};

const MainContent = () => {
  return (
    <div className="container mainContent">
      {/* <div className=""></div> */}
      <UploadButtons />
      <SearchBar />
      <UploadFormModal />
    </div>
  );
};

export default MainContent;
