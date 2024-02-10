import { useEffect, useState } from "react";
import M from "materialize-css";

const LogInModal = () => {
  console.log("Login modal");

  useEffect(() => {
    const modal = document.querySelector("#modal2");
    window.M.Modal.init(modal, { preventScrolling: true });
  }, []);

  return (
    <div id="modal2" className="modal center">
      <div className="modal-content">
        <h4>LogInModal</h4>
      </div>
      <div className="modal-footer">
        <p>Already have an account? Click here.</p>
      </div>
    </div>
  );
};

export default LogInModal;
