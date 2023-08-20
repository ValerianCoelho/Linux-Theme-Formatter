import React from "react";
import { Theme } from "../../../../Themes/Webpage/Theme";
import { InputEditorIcon, CopyBtn, DeleteBtn, ExpandBtn } from "./Svg/Svg";

function InputTextEditor() {
  const styles = {
    editorContainer: {
      width: '500px',
      height: '400px',
      display: 'grid',
      gridTemplateColumns: '5% auto',
      gridTemplateRows: '10% auto 10%',
      border: `1px solid ${Theme.inputEditorBorderColor}`
    },
    toolBar: {
      backgroundColor: Theme.inputEditorToolbarColor,
      gridColumn: '1 / span 2',
      display: 'grid',
      gridTemplateColumns: 'auto 1fr auto auto auto',
      alignItems: 'center',
      gap: '10px',
      padding: '0 10px 0 5px'
    },
    lineCountBar: {
      backgroundColor: Theme.inputEditorTaskbarColor,
      borderRight: `1px solid ${Theme.inputEditorBorderColor}`
    },
    editor: {
      backgroundColor: Theme.inputEditorBgColor,
      overflow: 'auto',
      outline: 'none'
    },
    taskbar: {
      backgroundColor: Theme.inputEditorTaskbarColor,
      gridColumn: '1 / span 2',
      borderTop: `1px solid ${Theme.inputEditorBorderColor}`
    }
  }
  return (
    <div style={styles.editorContainer}>
      <div className="toolbar" style={styles.toolBar}>
        <InputEditorIcon/>
        <div></div>
        <DeleteBtn/>
        <CopyBtn/>
        <ExpandBtn/>
      </div>
      <div className="line-count-bar" style={styles.lineCountBar}></div>
      <div className="editor" style={styles.editor} contenteditable="true"></div>
      <div className="taskbar" style={styles.taskbar}></div>
    </div>
  )
}

export default InputTextEditor;