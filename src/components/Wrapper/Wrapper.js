import React from "react";
import "./Wrapper.css";

const Wrapper = props =>
<main className="container wrapper">
  {props.children}
</main>;

export default Wrapper;
