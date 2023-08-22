import React from "react";
import { Theme } from "../../../../Themes/Webpage/Theme";
import { InputEditorIcon, CopyBtn, DeleteBtn, ExpandBtn } from "./Svg/Svg";
import TextEditor from "./TextEditor/TextEditor";

function InputTextEditor() {
  const styles = {
    editorContainer: {
      width: '500px',
      height: '400px',
      display: 'grid',
      gridTemplateColumns: '1fr',
      gridTemplateRows: '10% auto',
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
    editor: {
      backgroundColor: 'red',
      overflow: 'auto',
      outline: 'none'
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
      <div className="editor" style={styles.editor}><TextEditor/></div>
    </div>
  )
}

export default InputTextEditor;