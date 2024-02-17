import { useState } from "react";

const DialogBox = (action) => {
  const [isArchive, setIsArchive] = useState(true);

  if (action === "archive") {
    setIsArchive(true);
  } else if (action === "delete") {
    setIsArchive(false);
  }

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
