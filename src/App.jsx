import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import TextEditor from "./Components/TextEditor/TextEditor";
import Taskbar from "./Components/Taskbar/Taskbar";
import './mediaQuery.css'
import './App.css'

function App() {
  return (
    <div className="body">
      <Navbar/>
      <TextEditor/>
      <Taskbar/>
    </div>
  );
}

export default App;
