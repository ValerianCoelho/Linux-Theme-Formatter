import React from "react";
import { connect } from "react-redux";
import { Logo, About } from "./Svg/Svg";
 
function Navbar(props) {
  const styles = `
    .header {
      display: flex;
      justify-content: space-between;
      margin: 0 40px 20px 40px;
    }
    .title-section {
      display: flex;
      align-items: center;
      color: ${props.Theme.pageFgColor};
    }
    .navigation-section {
      display: flex;
      align-items: center;
      gap: 20px;
    }
    .share-btn {
      color: ${props.Theme.shareBtnFgColor};
      background-color: ${props.Theme.shareBtnBgColor};
    }
    .donate-btn {
      color: ${props.Theme.donateBtnFgColor};
      background-color: ${props.Theme.donateBtnBgColor};
    }
    .btn {
      width: 90px;
      height: 40px;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
    }
    .about {
      background-color: ${props.Theme.pageBgColor}
    }
  `
  return (
    <>
      <style> {styles} </style>
      <header className="header">
        <div className="title-section">
          <Logo color={props.Theme.pageFgColor}/>
          <pre className="title">  Linux Theme Formatter</pre>
        </div>
        <nav className="navigation-section">
          <a href={`https://api.whatsapp.com/send?text=' + ${encodeURIComponent(window.document.title + ' - ' + window.location.href)}`} target="_blank" className="btn share-btn">Share</a>
          <a href="https://www.buymeacoffee.com/vc27" target="_blank" className="btn donate-btn">Donate</a>
          <button  className="about"><About color={props.Theme.pageFgColor}/></button>
        </nav>
      </header>
    </>
  )
}

const mapStateToProps = state => {
  return {
    Theme: state.Theme
  }
}

export default connect(
  mapStateToProps
)(Navbar);