import { useEffect, useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import DialogBox from "./DialogBox";

const currentDate = new Date();
const formattedDate = currentDate.toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

const sampleData = [
  { name: "Address 1", uploadDate: formattedDate },
  { name: "Address 2", uploadDate: formattedDate },
  { name: "Address 3", uploadDate: formattedDate },
];

const Pagination = () => {
  return (
    <ul className="pagination hide-on-small-only">
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

// const renderData = () => {}

const Table = () => {
  const [isLoading, setIsLoading] = useState(false);
  // const [addressData, setAddressData] = useState(null);
  const [isCheckboxClicked, setIsCheckboxClicked] = useState(false);
  // const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);
  const [dialogBoxActionType, setDialogBoxActionType] = useState(null);
  const isAllRowsSelected = selectedRows.length === sampleData.length;

  // useEffect(() => {
  //   M.AutoInit();
  // }, []);

  const handleButtonClick = (actionType) => {
    if (actionType === "archive") {
      setDialogBoxActionType("Archive");
    } else if (actionType === "delete") {
      setDialogBoxActionType("Delete");
    }

    const modalInstance = M.Modal.getInstance(
      document.querySelector("#modal3")
    );
    modalInstance.open();
  };

  const handleCheckboxClick = (index) => {
    const isSelected = selectedRows.includes(index);

    setSelectedRows((previousSelections) => {
      if (isSelected) {
        return previousSelections.filter((i) => i !== index);
      } else {
        return [...previousSelections, index];
      }
    });
  };

  const handleCheckboxClickAll = () => {
    if (isAllRowsSelected) {
      // If all rows are already selected, unselect all
      setSelectedRowIndices([]);
    } else {
      // If not all rows are selected, select all
      const allRowIndices = sampleData.map((_, index) => index);
      setSelectedRowIndices(allRowIndices);
    }
  };

  // const handleButtonClick = () => {
  //   setIsButtonClicked(!isButtonClicked);
  //   console.log("Button clicked");
  // };

  // useEffect(() => {
  //   const elems = document.querySelectorAll(".collapsible");
  //   const collapsibleRows = M.Collapsible.init(elems, {});

  //   return () => {
  //     collapsibleRows.forEach((e) => {
  //       e.destroy();
  //     });
  //   };
  // }, []);

  return (
    <>
      {isLoading ? (
        <div className="table container center z-depth-1">
          <div className="progress container">
            <div className="indeterminate"></div>
          </div>
        </div>
      ) : (
        <div className="table container center z-depth-1">
          <table className="highlight responsive-table ">
            <thead>
              <tr>
                <th className="hide-on-small-only">
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
                  <td className="hide-on-small-only">
                    <span onClick={() => handleCheckboxClick(index)}>
                      {selectedRows.includes(index) ? (
                        <i className="material-icons">check_box</i>
                      ) : (
                        <i className="material-icons">
                          check_box_outline_blank
                        </i>
                      )}
                    </span>
                  </td>
                  <td className="center-align valign-wrapper">{name}</td>
                  <td
                    className="tooltipped"
                    data-position="bottom"
                    data-tooltip={new Date()}
                  >
                    {uploadDate.toString()}
                  </td>
                  <td>
                    <a
                      href="#modal3"
                      className="btn-flat waves-effect modal-trigger"
                      onClick={() => handleButtonClick("archive")}
                    >
                      <i className="material-icons ">archive</i>
                    </a>
                    <a
                      href="#modal3"
                      className="btn-flat waves-effect modal-trigger"
                      onClick={() => handleButtonClick("delete")}
                    >
                      <i className="material-icons">delete</i>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="hide-on-small-only">Selected: 0 of 10</div>

          <Pagination />
          <DialogBox action={dialogBoxActionType} />
        </div>
      )}
    </>
  );
};

export default Table;
