import React from "react";
import Address from "./Address";

export default function AddressList({ addresses }) {
  return addresses.map((address) => {
    return <Address address={address} />;
  });
}
