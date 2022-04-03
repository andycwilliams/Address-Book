import React from "react";

export default function Address({ address }) {
  return (
    <div>
      <label>{address.name}</label>
      <label>{address.email}</label>
      <label>{address.phoneNumber}</label>
      <label>{address.home}</label>
    </div>
  );
}

// ----------------------------------------------------------------

/* <label>{address.ssn}</label>
<label>{address.CCInfo}</label>
<label>{address.childhoodDream}</label> */
