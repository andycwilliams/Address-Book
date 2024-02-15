import { useEffect, useState } from "react";
import M from "materialize-css";

const LogInModal = () => {
  const [isLogInForm, setIsLogInForm] = useState(true);
  // console.log("Login modal");

  useEffect(() => {
    const modal = document.querySelector("#modal2");
    window.M.Modal.init(modal, { preventScrolling: true });
  }, []);

  const handleFormSwitch = () => {
    setIsLogInForm(!isLogInForm);
  };

  return (
    <div id="modal2" className="modal center">
      <div className="modal-content">
        <h4>{isLogInForm ? "Log In" : "Sign Up"}</h4>
        <p>
          {isLogInForm
            ? "Log in to your account"
            : "Sign Up using the form below"}
        </p>
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <input id="email" type="email" className="validate" />
                <label htmlFor="email">Email</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input id="password" type="password" className="validate" />
                <label htmlFor="password">Password</label>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="modal-footer">
        <button
          className="waves-effect waves-teal btn-flat"
          onClick={handleFormSwitch}
        >
          {isLogInForm
            ? "Already have an account? Click here."
            : "New to the app? Create an account here."}
        </button>
      </div>
    </div>
  );
};

export default LogInModal;
