import React from "react";
import { connect } from "react-redux";
import { changeTheme } from "../../Redux/index";
import { Discord, Github, LinkedIn, ChangeThemeBtn } from "./Svg/Svg";

const Taskbar = (props)=> {
  const styles = `
    .footer {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      place-items: center;
      margin: 0 40px;
    }
    .svg-btn {
      background-color: ${props.Theme.pageBgColor};
    }
    .social-links {
      width: 200px;
      display: flex;
      justify-content: space-evenly;
    }
    .change-theme {
      justify-self: flex-end;
    }
  `
  return (
    <>
      <style> {styles} </style>
      <footer className="footer">
        <div></div>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/valerian-coelho-835193258/" target="_blank" className="svg-btn"><LinkedIn color={props.Theme.pageFgColor}/></a>
          <a href="https://github.com/ValerianCoelho" target="_blank" className="svg-btn"><Github color={props.Theme.pageFgColor}/></a>
          <a href="https://discordapp.com/users/1037802358547161109" target="_blank" className="svg-btn"><Discord color={props.Theme.pageFgColor}/></a>
        </div>
        <button className="svg-btn change-theme" onClick={props.changeTheme}>
          <ChangeThemeBtn color={props.Theme.pageFgColor}/>
        </button>
      </footer>
    </>
  )
}

const mapStateToProps = state => {
  return {
    Theme: state.Theme
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeTheme: ()=> dispatch(changeTheme())
  }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Taskbar);