import { useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

const Table = () => {
  useEffect(() => {
    const options = {};
    const elems = document.querySelectorAll(".collapsible");
    const collapsibleRows = M.Collapsible.init(elems, options);

    return () => {
      collapsibleRows.forEach((e) => {
        e.destroy();
      });
    };
  }, []);

  return (
    <>
      <div className="progress">
        {/* <div className="indeterminate"></div> */}
      </div>

      {/* <ul className="collapsible">
        <li>
          <div className="collapsible-header">
            <i className="material-icons">filter_drama</i>First
          </div>
          <div className="collapsible-body">
            <span>Lorem ipsum dolor sit amet.</span>
          </div>
        </li>
        <li>
          <div className="collapsible-header">
            <i className="material-icons">place</i>Second
          </div>
          <div className="collapsible-body">
            <span>Lorem ipsum dolor sit amet.</span>
          </div>
        </li>
        <li>
          <div className="collapsible-header">
            <i className="material-icons">whatshot</i>Third
          </div>
          <div className="collapsible-body">
            <span>Lorem ipsum dolor sit amet.</span>
          </div>
        </li>
      </ul> */}

      <table className="highlight container">
        <thead>
          <tr>
            <th>Name</th>
            <th>Upload Date</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Address 1</td>
            <td>Today</td>
            <td>Archive</td>
          </tr>
          <tr>
            <td>Address 2</td>
            <td>Yesterday</td>
            <td>Archive</td>
          </tr>
          <tr>
            <td>Address 2</td>
            <td>Yesteryear</td>
            <td>Archive</td>
          </tr>
        </tbody>
      </table>

      {/* <ul className="collapsible highlight">
        <li>
          <div className="collapsible-header">
            <i className="material-icons">filter_drama</i>First
          </div>
          <div className="collapsible-body">
            <span>Lorem ipsum dolor sit amet.</span>
          </div>
        </li>
        <li>
          <div className="collapsible-header">
            <i className="material-icons">place</i>Second
          </div>
          <div className="collapsible-body">
            <span>Lorem ipsum dolor sit amet.</span>
          </div>
        </li>
      </ul> */}

      {/* <a className="btn-floating btn-large waves-effect waves-light purple darken-2">
        <i className="material-icons">add</i>
      </a> */}

      <button
        className="btn waves-effect waves-light purple darken-2"
        type="submit"
        name="action"
      >
        Submit
        <i className="material-icons right">send</i>
      </button>

      <ul className="pagination">
        <li className="disabled">
          <a href="#!">
            <i className="material-icons">chevron_left</i>
          </a>
        </li>
        <li className="active">
          <a href="#!">1</a>
        </li>
        <li className="waves-effect">
          <a href="#!">2</a>
        </li>
        <li className="waves-effect">
          <a href="#!">3</a>
        </li>
        <li className="waves-effect">
          <a href="#!">4</a>
        </li>
        <li className="waves-effect">
          <a href="#!">5</a>
        </li>
        <li className="waves-effect">
          <a href="#!">
            <i className="material-icons">chevron_right</i>
          </a>
        </li>
      </ul>
    </>
  );
};

export default Table;
