import { useState } from "react";
import M from "materialize-css";

const DialogBox = (action) => {
  const [isArchive, setIsArchive] = useState(true);

  if (action === "archive") {
    setIsArchive(true);
  } else if (action === "delete") {
    setIsArchive(false);
  }

  const handleDisplayNotification = () => {
    if (isArchive) {
      M.toast({
        html: "Address archived!",
        classes: "rounded center blue",
        displayLength: 2000,
      });
      const modalInstance = M.Modal.getInstance(
        document.querySelector("#modal3")
      );
      modalInstance.close();
    } else if (!isArchive) {
      M.toast({
        html: "Address deleted!",
        classes: "rounded center red",
        displayLength: 2000,
      });
      const modalInstance = M.Modal.getInstance(
        document.querySelector("#modal3")
      );
      modalInstance.close();
    } else {
      console.log("Error");
      M.toast({
        html: "Error",
        classes: "rounded center red",
        displayLength: 2000,
      });
      const modalInstance = M.Modal.getInstance(
        document.querySelector("#modal3")
      );
      modalInstance.close();
    }
  };

  return (
    <div id="modal3" className="modal">
      <div className="modal-content">
        <h4>{isArchive ? "Archive" : "Delete"}</h4>
        <p>{isArchive ? "Archive " : "Delete"} your address.</p>
        {isArchive ? null : (
          <p className="red white-text">
            WARNING: This action cannot be undone!
          </p>
        )}
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          className="modal-close waves-effect waves-purple btn-flat left"
        >
          Close
        </a>
        <a
          href="#!"
          className="modal-close waves-effect waves-red red text-white btn right"
          onClick={handleDisplayNotification}
        >
          Confirm
        </a>

        {/* <a
          href="#!"
          className="modal-close waves-effect waves-green btn-flat left"
        >
          Close
        </a>
        <a
          href="#!"
          className="modal-close waves-effect waves-green btn-flat right"
        >
          Confirm
        </a> */}
      </div>
    </div>
  );
};

export default DialogBox;
