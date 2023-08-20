import React from "react";
import { Theme } from "../../Themes/Webpage/Theme";
import { Discord, Github, LinkedIn, ChangeThemeBtn } from "./Svg/Svg";

function Taskbar() {
  const styles = {
    footer: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      placeItems: 'center',
      margin: '0 40px'
    },
    svgBtn: {
      backgroundColor: Theme.primaryColor
    },
    socialLinks: {
      width: '200px',
      display: 'flex',
      justifyContent: 'space-evenly'
    },
    changeTheme: {
      justifySelf: 'flex-end'
    }
  }
  return (
    <footer style={styles.footer}>
      <div></div>
      <div className="social-links" style={styles.socialLinks}>
        <button className="linked-in" style={styles.svgBtn}><LinkedIn/></button>
        <button className="github" style={styles.svgBtn}><Github/></button>
        <button className="discord" style={styles.svgBtn}><Discord/></button>
      </div>
      <button style={{...styles.svgBtn, ...styles.changeTheme}}><ChangeThemeBtn/></button>
    </footer>
  )
}

export default Taskbar;