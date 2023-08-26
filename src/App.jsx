import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import TextEditor from "./Components/TextEditor/TextEditor";
import Taskbar from "./Components/Taskbar/Taskbar";
import './mediaQuery.css'
import './App.css'
import { Provider } from "react-redux";
import store from "./Redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="body">
        <Navbar/>
        <TextEditor/>
        <Taskbar/>
      </div>
    </Provider>
  );
}

export default App;
