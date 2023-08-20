import React from "react";
import { Theme } from "../../../../Themes/Editor/Theme";
import { OutputEditorIcon, HighlightBtn, ChangeThemeBtn, ExpandBtn } from './Svg/Svg'

function OutputTextEditor() {
  const styles = {
    editorContainer: {
      width: '500px',
      height: '400px',
      display: 'grid',
      gridTemplateColumns: '5% auto',
      gridTemplateRows: '10% auto 10%',
      border: `1px solid ${Theme.outputEditorBorderColor}`
    },
    toolBar: {
      backgroundColor: Theme.outputEditorToolbarColor,
      gridColumn: '1 / span 2',
      display: 'grid',
      gridTemplateColumns: 'auto auto auto auto auto 1fr auto auto auto',
      alignItems: 'center',
      gap: '10px',
      padding: '0 10px 0 5px'

    },
    lineCountBar: {
      backgroundColor: Theme.outputEditorTaskbarColor,
      borderRight: `1px solid ${Theme.outputEditorBorderColor}`
    },
    editor: {
      backgroundColor: Theme.outputEditorBgColor
    },
    taskbar: {
      backgroundColor: Theme.outputEditorTaskbarColor,
      gridColumn: '1 / span 2',
      borderTop: `1px solid ${Theme.outputEditorBorderColor}`
    },
    colorPalette: {
      width: '50px',
      height: '60%',
      borderRadius: '7px',
      border: `1px solid ${Theme.outputEditorBorderColor}`
    },
    kernelColor: {
      backgroundColor: Theme.kernelColor
    },
    folderColor: {
      backgroundColor: Theme.folderColor
    },
    accentColor: {
      backgroundColor: Theme.accentColor
    },
    textColor: {
      backgroundColor: Theme.textColor
    },
  }
  return (
    <div style={styles.editorContainer}>
      <div className="toolbar" style={styles.toolBar}>
        <OutputEditorIcon/>
        <button className="color-palette" style={{...styles.colorPalette, ...styles.kernelColor}}></button>
        <button className="color-palette" style={{...styles.colorPalette, ...styles.folderColor}}></button>
        <button className="color-palette" style={{...styles.colorPalette, ...styles.accentColor}}></button>
        <button className="color-palette" style={{...styles.colorPalette, ...styles.textColor}}></button>
        <HighlightBtn/>
        <div></div>
        <ChangeThemeBtn/>
        <ExpandBtn/>
      </div>
      <div className="line-count-bar" style={styles.lineCountBar}></div>
      <div className="editor" style={styles.editor}>dfd</div>
      <div className="taskbar" style={styles.taskbar}></div>
    </div>
  )
}

export default OutputTextEditor;