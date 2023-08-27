import React, { useState } from "react";
import { connect } from "react-redux";
import { Logo, About, Close, Share, Donate } from "./Svg/Svg";
 
function Navbar(props) {
  const [isAboutActive, setIsAboutActive] = useState(false)
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
      padding: 2px 20px;
      height: 40px;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
    }
    .about-btn {
      background-color: ${props.Theme.pageBgColor}
    }
    .overlay {
      display: none;
    }
    .overlay-active {
      background-color: ${props.Theme.pageBgColor};
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background-color: rgba(0 ,0 ,0 , 0.5);
      backdrop-filter: blur(10px);
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .about-window {
      width: 60%;
      color: ${props.Theme.pageFgColor};
      background-color: ${props.Theme.pageBgColor};
      padding: 3rem;
      border-radius: 30px 20px;
      font-size: 18px;
      box-shadow: 0 0 20px rgba(0, 0, 0, .5);
    }
    .heading {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10pxl
    }
    button {
      background-color: ${props.Theme.pageBgColor};
    }
    h2, h3, p {
      font-family: 'Ubuntu Mono', monospace;
    }
    @media(max-width: 650px) {
      .title{
          display: none;
      }
      .about-window{
        font-size: 15px;
      }
    }
    .icon {
      display: none;
    }
    @media(max-width: 400px) {
      .icon {
          display: inline;
      }
      .label {
        display: none;
      }
      .btn {
        background-color: ${props.Theme.pageBgColor};
        padding: 0;
      }
      .about-window{
        font-size: 13px;
      }
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
          <a href={`https://api.whatsapp.com/send?text=' + ${encodeURIComponent('Linux Theme Formatter' + ' - ' + window.location.href)}`} target="_blank" className="btn share-btn">
            <div className="label">Share</div>
            <div className="icon share-icon"><Share color={props.Theme.shareBtnBgColor}/></div>
          </a>
          <a href="https://www.buymeacoffee.com/vc27" target="_blank" className="btn donate-btn">
            <div className="label">Donate</div>
            <div className="icon donate-icon"><Donate color={props.Theme.donateBtnBgColor}/></div>
          </a>
          <button className="about-btn" onClick={()=>{
            setIsAboutActive(true)
          }}><About color={props.Theme.pageFgColor}/></button>
        </nav>
        <div className={isAboutActive ? 'overlay-active' : 'overlay'}>
          <div className="about-window">
            <div className="heading">
              <h2>Linux Theme Formatter</h2>
              <button onClick={()=>{
                setIsAboutActive(false)
              }}><Close color={props.Theme.pageFgColor}/></button>
            </div>
            <p>
              Greetings, fellow code wranglers and Linux enthusiasts! 🐧🎩<br/><br/>
              We know the drill: practical lectures, Ubuntu screens, and the elusive clock hands. Fear not, for we're here to transform your code outputs into visual masterpieces. <br/><br/>
              Enter Linux Theme Formatter – the genie that turns text into terminal-style artistry.<br/><br/>
              Not everyone has a Linux wonderland at home, and running those terminal commands might be a distant dream. But why just dream when you can "theme"?<br/><br/>
              With Linux Theme Formatter, all you need is a dash of text magic, and voilà! Enter your output text, sprinkle it with the enchanting colours of the Linux terminal, and watch the magic unfold. 🎨🚀<br/><br/>
            </p>
            <h3 style={{ marginBottom: '10px' }}>Note</h3>
            <p>
              Some features might be taking a coffee break at the moment, but stay tuned for the full experience soon. Your text-to-terminal transformation is on the horizon!<br/><br/>
              Thank-you for your patience
            </p>
          </div>
        </div>
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