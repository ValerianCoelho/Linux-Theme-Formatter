import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Center from "./Components/Center/Center";
import Taskbar from "./Components/Taskbar/Taskbar";
import './mediaQuery.css'

function App() {
  const styles = {
    body: {
      height: '100vh',
      display: 'grid'
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
