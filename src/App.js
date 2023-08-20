import React from "react";
import { Theme } from "./Themes/Webpage/Theme";
import Navbar from "./Components/Navbar/Navbar";
import Center from "./Components/Center/Center";
import Taskbar from "./Components/Taskbar/Taskbar";

function App() {
  const styles = {
    body: {
      backgroundColor: Theme.primaryColor,
      height: '100vh'
    }
  }

  return (
    <div style={styles.body}>
      <Navbar/>
      <Center/>
      <Taskbar/>
    </div>
  );
}

export default App;
