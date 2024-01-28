import { useEffect, useState } from "react";

const UploadFormModal = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    console.log(event);

    // const file = event.target.files[0];
    // console.log('File:', file);
    // setSelectedFile(file);
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
        >
          Submit
          <i className="material-icons right">send</i>
        </button>
      </div>
    </div>
  );
};

export default UploadFormModal;
