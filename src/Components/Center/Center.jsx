import React from "react";
import TextEditor from './Components/TextEditor'

function Center() {
  const styles = {
    center: {
      display: 'flex',
      justifyContent: 'space-evenly'
    }
  }
  return (
    <div style={styles.center}>
      <TextEditor/>
    </div>
  )
}

export default Center;