// import { useState } from "react";

const UploadFormModal = () => {
  return (
    <div id="upload-form-modal" className="modal">
      <div className="modal-content">
        <h4>Upload File</h4>
        <p>Select a file to upload</p>
      </div>
      <div className="modal-footer">
        <a href="#!" className="modal-close waves-effect waves-green btn-flat">
          Submit
        </a>
      </div>
    </div>
  );
};

export default UploadFormModal;
