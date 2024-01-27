import { useEffect, useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import UploadFormModal from "./UploadFormModal";

const sampleData = [
  { name: "Address 1", uploadDate: new Date() },
  { name: "Address 2", uploadDate: new Date() },
  { name: "Address 3", uploadDate: new Date() },
];

const Table = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [addressData, setAddressData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const options = {};
    const elems = document.querySelectorAll(".collapsible");
    const collapsibleRows = M.Collapsible.init(elems, options);

    return () => {
      collapsibleRows.forEach((e) => {
        e.destroy();
      });
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="progress">
          <div className="indeterminate"></div>
        </div>
      ) : (
        <div className="container center">
          <table className="highlight">
            <thead>
              <tr>
                <th>Name</th>
                <th>Upload Date</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {sampleData.map(({ name, uploadDate }, index) => (
                <tr key={index}>
                  <td>{name}</td>
                  <td>{uploadDate.toString()}</td>
                  <td>
                    <i className="material-icons">archive</i>
                    <i className="material-icons">delete</i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* btn-floating btn-large waves-effect waves-light red */}

          <div className="hide-on-small-only">
            <button
              className="btn waves-effect waves-light red darken-2"
              // type="submit"
              // name="action"
              onClick={openModal}
            >
              Upload
              <i className="material-icons right">add</i>
            </button>
            {isModalOpen && <UploadFormModal />}
          </div>

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
          <div
            className="hide-on-med-and-up"
            style={{ position: "fixed", bottom: "20px", right: "20px" }}
          >
            <a className="btn-floating btn-large waves-effect waves-light red  darken-2">
              <i className="material-icons">add</i>
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Table;
