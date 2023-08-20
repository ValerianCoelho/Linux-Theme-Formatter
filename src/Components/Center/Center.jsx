import React from "react";
import InputTextEditor from './Components/InputTextEditor/InputTextEditor'
import OutputTextEditor from './Components/OutputTextEditor/OutputTextEditor'
import { Theme } from "../../Themes/Webpage/Theme";

function Center() {
  const styles = {
    center: {
      display: 'flex',
      justifyContent: 'space-evenly'
    }
  }
  return (
    <div style={styles.center}>
      <InputTextEditor/>
      <OutputTextEditor/>
    </div>
  )
}

export default Center;