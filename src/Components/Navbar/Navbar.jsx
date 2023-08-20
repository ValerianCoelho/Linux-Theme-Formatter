import React from "react";
import { Logo, About } from "./Svg/Svg";
 
function Navbar() {
  return (
    <header>
      <div className="title-section">
          <Logo/>
        <div className="title">Linux Theme Formatter</div>
      </div>
      <nav className="navigation-section">
        <div className="share-btn">Share</div>
        <div className="donate-btn">Donate</div>
        <About/>
      </nav>
    </header>
  )
}

export default Navbar;