import { useEffect, useState } from "react";

const UploadFormModal = () => {
  useEffect(() => {
    const modal = document.querySelector("#upload-form-modal");
    window.M.Modal.init(modal, {});
  }, []);

  return (
    <div id="upload-form-modal" className="modal">
      <div className="modal-content">
        <h4>Upload File</h4>
        <p>Select a file to upload</p>
      </div>
      <div className="modal-footer">
        <a href="#!" className="modal-close waves-effect waves-green btn-flat">
          Button
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
