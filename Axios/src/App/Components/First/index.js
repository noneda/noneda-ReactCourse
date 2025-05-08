import React from "react";
import { FirstRequest } from "../../Hooks/First";

const First = () => {
  FirstRequest();
  return <h2 className="text-center">First Request</h2>;
};

export default First;
