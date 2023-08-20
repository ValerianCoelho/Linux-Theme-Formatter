import React from "react";
import { Discord, Github, LinkedIn } from "./Svg/Svg";

function Taskbar() {
  return (
    <>
      <button className="linked-in"><LinkedIn/></button>
      <button className="github"><Github/></button>
      <button className="discord"><Discord/></button>
    </>
  )
}

export default Taskbar;