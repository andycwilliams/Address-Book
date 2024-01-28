import { useEffect, useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import UploadFormModal from "./UploadFormModal";

const sampleData = [
  { name: "Address 1", uploadDate: new Date() },
  { name: "Address 2", uploadDate: new Date() },
  { name: "Address 3", uploadDate: new Date() },
];

const Pagination = () => {
  return (
    <ul className="pagination">
      <li className="disabled">
        <a href="#!">
          <i className="material-icons">chevron_left</i>
        </a>
      </li>
      <li className="active">
        <a href="#!">1</a>
      </li>
      <li className="waves-effect">
        <a href="#!">2</a>
      </li>
      <li className="waves-effect">
        <a href="#!">3</a>
      </li>
      <li className="waves-effect">
        <a href="#!">4</a>
      </li>
      <li className="waves-effect">
        <a href="#!">5</a>
      </li>
      <li className="waves-effect">
        <a href="#!">
          <i className="material-icons">chevron_right</i>
        </a>
      </li>
    </ul>
  );
};

const UploadButtons = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="hide-on-small-only">
        <button
          className="btn waves-effect waves-light red darken-2"
          onClick={openModal}
        >
          Upload
          <i className="material-icons right">add</i>
        </button>
        {isModalOpen && <UploadFormModal />}
      </div>
      <div
        className="hide-on-med-and-up"
        style={{ position: "fixed", bottom: "20px", right: "20px" }}
      >
        <a className="btn-floating btn-large waves-effect waves-light red  darken-2">
          <i className="material-icons">add</i>
        </a>
      </div>
    </>
  );
};

const Table = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [addressData, setAddressData] = useState(null);
  const [isCheckboxClicked, setIsCheckboxClicked] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleCheckboxClick = () => {
    setIsCheckboxClicked(!isCheckboxClicked);
  };

  const handleCheckboxClickAll = () => {};

  const handleButtonClick = () => {
    setIsButtonClicked(!isButtonClicked);
    console.log("Button clicked");
  };

  useEffect(() => {
    const elems = document.querySelectorAll(".collapsible");
    const collapsibleRows = M.Collapsible.init(elems, {});

    return () => {
      collapsibleRows.forEach((e) => {
        e.destroy();
      });
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="progress container">
          <div className="indeterminate"></div>
        </div>
      ) : (
        <div className="table container center z-depth-1">
          <table className="highlight">
            <thead>
              <tr>
                <th>
                  {isCheckboxClicked ? (
                    <span onClick={handleCheckboxClickAll}>
                      <i className="material-icons">check_box</i>
                    </span>
                  ) : (
                    <span onClick={handleCheckboxClickAll}>
                      <i className="material-icons">check_box_outline_blank</i>
                    </span>
                  )}
                </th>
                <th>Name</th>
                <th>Upload Date</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {sampleData.map(({ name, uploadDate }, index) => (
                <tr key={index}>
                  <td>
                    {isCheckboxClicked ? (
                      <span onClick={handleCheckboxClick}>
                        <i className="material-icons">check_box</i>
                      </span>
                    ) : (
                      <span onClick={handleCheckboxClick}>
                        <i className="material-icons">
                          check_box_outline_blank
                        </i>
                      </span>
                    )}
                  </td>
                  <td>{name}</td>
                  <td>{uploadDate.toString()}</td>
                  <td>
                    <a
                      className="btn-flat waves-effect waves-light"
                      onClick={handleButtonClick}
                    >
                      <i className="material-icons">archive</i>
                    </a>
                    <a
                      className="btn-flat waves-effect waves-light"
                      onClick={handleButtonClick}
                    >
                      <i className="material-icons">delete</i>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div>Selected: 0 of 10</div>

          <Pagination />

          <UploadButtons />
        </div>
      )}
    </>
  );
};

export default Table;
