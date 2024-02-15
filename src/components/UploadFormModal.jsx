import { useEffect, useState } from "react";
import M from "materialize-css";

const UploadFormModal = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  // console.log("test");

  const handleFileChange = ({ target }) => {
    setSelectedFile(null);
    const file = target.files[0];

    if (file) {
      console.log("File:", file.name);
      setSelectedFile(file);
    } else {
      console.log("Selection cleared!");
      setSelectedFile(null);
    }

    setSelectedFile(file);
  };

  const handleClearFile = () => {
    console.log("Clearing file");
    setSelectedFile(null);
  };

  const handleDisplayNotification = () => {
    if (selectedFile) {
      M.toast({
        html: "File added!",
        classes: "rounded center",
        displayLength: 2000,
      });
      const modalInstance = M.Modal.getInstance(
        document.querySelector("#modal1")
      );
      modalInstance.close();
    } else {
      M.toast({
        html: "Please select a file",
        classes: "rounded center red",
        displayLength: 2000,
      });
    }
  };

  useEffect(() => {
    const modal = document.querySelector("#modal1");
    window.M.Modal.init(modal, { preventScrolling: true });
  }, []);

  return (
    <div id="modal1" className="modal center">
      <div className="modal-content">
        <h4>Upload File</h4>
        <div className="file-field input-field row">
          <div className="btn col s12 m2">
            <span>Select</span>
            <input
              type="file"
              onChange={handleFileChange}
              accept=".pdf, .doc, .docx"
            />
          </div>
          <div className="file-path-wrapper col s12 m8">
            <input
              className="file-path validate"
              type="text"
              placeholder={selectedFile ? selectedFile.name : "None"}
              readOnly={!selectedFile}
            />
          </div>
          {selectedFile && (
            <div>
              <button
                className="btn waves-effect waves-light right col s12 m2"
                onClick={handleClearFile}
              >
                Clear
                <i className="material-icons right">clear</i>
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="modal-footer row">
        <button
          className="btn waves-effect waves-light col s12 m6"
          onClick={handleDisplayNotification}
        >
          Submit
          <i className="material-icons right">send</i>
        </button>
        <button className="modal-close waves-effect waves-green btn-flat left col s12 m6">
          Close
          <i className="material-icons right">close</i>
        </button>
      </div>
    </div>
  );
};

export default UploadFormModal;
