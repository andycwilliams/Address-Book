import { useEffect, useState } from "react";
import M from "materialize-css";

const UploadFormModal = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = ({ target }) => {
    setSelectedFile(null);

    const file = target.files[0];
    console.log("File:", file);
    setSelectedFile(file);
  };

  const handleDisplayNotification = () => {
    M.toast({
      html: "File added!",
      classes: "rounded center",
    });

    // On success, close modal
    // On failure, alert user and remain open
  };

  useEffect(() => {
    const modal = document.querySelector("#modal1");
    window.M.Modal.init(modal, { preventScrolling: true });
  }, []);

  return (
    <div id="modal1" className="modal">
      <div className="modal-content">
        <h4>Upload File</h4>
        <p>Select a file to upload</p>
        <div>
          <input
            type="file"
            onChange={handleFileChange}
            accept=".pdf, .doc, .docx"
          />
          <p>Selected File: {selectedFile ? selectedFile.name : "None"}</p>
        </div>
      </div>
      <div className="modal-footer">
        <a href="#!" className="modal-close waves-effect waves-green btn-flat">
          Close
        </a>
        <button
          className="btn waves-effect waves-light"
          type="submit"
          name="action"
          onClick={handleDisplayNotification}
        >
          Submit
          <i className="material-icons right">send</i>
        </button>
      </div>
    </div>
  );
};

export default UploadFormModal;
