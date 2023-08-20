import React from "react";
import { Discord, Github, LinkedIn } from "./Svg/Svg";

function Taskbar() {
  return (
    <>
      <a className="linked-in"><LinkedIn/></a>
      <a className="github"><Github/></a>
      <a className="discord"><Discord/></a>
    </>
  )
}

export default Taskbar;