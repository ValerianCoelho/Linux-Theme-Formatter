import React from "react";
import { Theme } from "../../Themes/Webpage/Theme";
import { Logo, About } from "./Svg/Svg";
 
function Navbar() {
  const styles = {
    header: {
      display: 'flex',
      justifyContent: 'center'
    },
    titleSection: {
      display: 'flex',
      alignItems: 'center'
    },
    navigationSection: {
      display: 'flex',
      alignItems: 'center'
    },
    shareBtn: {
      backgroundColor: Theme.shareBtnBgColor,
      color: Theme.shareBtnColor
    },
    donateBtn: {
      backgroundColor: Theme.donateBtnBgColor,
      color: Theme.donateBtnColor
    },
    btn: {
      width: '90px',
      height: '40px',
      borderRadius: '10px'
    }
  }

  return (
    <header style={styles.header}>
      <div className="title-section" style={styles.titleSection}>
          <Logo/>
        <div className="title">Linux Theme Formatter</div>
      </div>
      <nav style={styles.navigationSection}>
        <button style={{...styles.shareBtn, ...styles.btn}}>Share</button>
        <button style={{...styles.donateBtn, ...styles.btn}}>Donate</button>
        <button className="about"><About/></button>
      </nav>
    </header>
  )
}

export default Navbar;