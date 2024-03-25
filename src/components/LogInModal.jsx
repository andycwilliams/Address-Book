// React Imports
import { useEffect, useState } from "react";
// Materialize Imports
import M from "materialize-css";
// PropTypes Imports
import PropTypes from "prop-types";

const LogInModal = ({ isLoggedIn, toggleLogin }) => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLogInForm, setIsLogInForm] = useState(true);
  // console.log("Login modal");

  useEffect(() => {
    const modal = document.querySelector("#modal2");
    window.M.Modal.init(modal, { preventScrolling: true });
  }, []);

  const handleFormSwitch = () => {
    setIsLogInForm(!isLogInForm);
  };

  const handleLoginClick = () => {
    toggleLogin();
  };

  return (
    <div id="modal2" className="modal center modal-fixed-footer">
      <div className="modal-content">
        <h4>{isLogInForm ? "Log In" : "Sign Up"}</h4>
        <p>{isLogInForm ? "Access your account" : "Create a free account"}</p>
        <div
        // className="row"
        // style={{ margin: 0 }}
        >
          <form
          // className="col s12"
          // style={{ padding: 0 }}
          >
            <div className="row">
              <div className="input-field col s12">
                <input id="email" type="email" className="validate" />
                <label htmlFor="email">Email</label>
              </div>
            </div>
            <div
              className="row"
              // style={{ marginTop: "-15px" }}
            >
              <div className="input-field col s12">
                <input id="password" type="password" className="validate" />
                <label htmlFor="password">Password</label>
                {isLogInForm ? (
                  <span
                    className="helper-text left"
                    // data-error="wrong"
                    // data-success="right"
                  >
                    Forgot your password? Click here.
                  </span>
                ) : null}
              </div>
            </div>
          </form>
        </div>
      </div>
      <div
        className="modal-footer purple darken-3"
        // style={{ marginTop: "-15px" }}
      >
        <button
          className="waves-effect waves-purple btn-small btn-flat white-text left"
          onClick={handleFormSwitch}
        >
          {isLogInForm
            ? "Already have an account? Click here."
            : "New to the app? Create an account here."}
        </button>
        <button
          className="waves-effect waves-purple btn-flat white-text right"
          onClick={handleLoginClick}
        >
          <span className="hide-on-small-only">Next</span>
          <i className="material-icons right hide-on-small-only">
            arrow_forward
          </i>
          <span className="hide-on-med-and-up">Next</span>
        </button>
      </div>
    </div>
  );
};

LogInModal.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  toggleLogin: PropTypes.func.isRequired,
};

export default LogInModal;
