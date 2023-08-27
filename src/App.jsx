import React from "react";
import { connect } from "react-redux";

import Navbar from "./Components/Navbar/Navbar";
import TextEditor from "./Components/TextEditor/TextEditor";
import Taskbar from "./Components/Taskbar/Taskbar";

import './App.css'

function App(props) {
  const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu+Mono:wght@400;700&display=swap');
  * {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
  html {
    background-color: ${props.Theme.pageBgColor};
  }
  button {
    border: none;
  }
  `
  return (
    <>
      <style> {styles} </style>
      <div className="body">
        <Navbar/>
        <TextEditor/>
        <Taskbar/>
      </div>
    </>
  );
}

const mapStateToProps = state => {
  return {
    Theme: state.Theme
  }
}

export default connect(
  mapStateToProps
)(App);
