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
    // setTimeout(() => {
    // code here
    // }, 1000);

    // On failure, alert user and remain open
  };

  useEffect(() => {
    const modal = document.querySelector("#modal1");
    window.M.Modal.init(modal, { preventScrolling: true });
  }, []);

  return (
    <div id="modal1" className="modal center">
      <div className="modal-content">
        <h4>Upload File</h4>
        <p>Select a file to upload</p>
        <div className="file-field input-field">
          <div className="btn">
            <span>Select</span>
            <input
              type="file"
              onChange={handleFileChange}
              accept=".pdf, .doc, .docx"
            />
            <i className="material-icons right">cloud_upload</i>
          </div>
          <div className="file-path-wrapper">
            <input
              className="file-path validate"
              type="text"
              placeholder={selectedFile ? selectedFile.name : "None"}
              readOnly
            />
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          className="modal-close waves-effect waves-green btn-flat left"
        >
          Close
          <i className="material-icons right">close</i>
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
