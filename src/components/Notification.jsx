// import { useState } from "react";
import M from "materialize-css";

const Notification = () => {
  // const [sendNotification, setSendNotification] = useState("");

  const showNotification = () => {
    M.toast({ html: "Button clicked!" });
  };

  return (
    <div>
      <a onClick={showNotification} className="btn">
        Toast!
      </a>
    </div>
  );
};

export default Notification;
