import React from "react";
// import Theme from '../../../Themes/Editor/Theme'
import { TextEditorIcon, HighlightBtn, ChangeThemeBtn, ExpandBtn, DeleteBtn, CopyBtn } from './Svg/Svg'
import { Theme } from "../../../Themes/Theme";
import { useState, useRef } from "react";

function TextEditor() {
  const [isExpanded, setIsExpanded] = useState(0)
  const editorStyles = `
    .editor > div {
      font-family: 'Ubuntu Mono', monospace;
    }
  `
  const Editor = useRef(null);
  const styles = {
    editorContainer: {
      width: '90%',
      maxWidth: '1000px',
      height: '450px',
      display: 'grid',
      gridTemplateColumns: '5% auto',
      gridTemplateRows: '10% auto 10%',
      border: `1px solid ${Theme.TextEditorBorderColor}`
    },
    toolBar: {
      backgroundColor: Theme.TextEditorToolbarColor,
      gridColumn: '1 / span 2',
      display: 'grid',
      gridTemplateColumns: 'auto auto auto auto auto 1fr auto auto auto auto',
      alignItems: 'center',
      gap: '10px',
      padding: '0 10px 0 5px'

    },
    lineCountBar: {
      backgroundColor: Theme.TextEditorTaskbarColor,
      borderRight: `1px solid ${Theme.TextEditorBorderColor}`
    },
    editor: {
      backgroundColor: Theme.TextEditorBgColor,
      fontFamily: `'Ubuntu Mono', 'monospace'`,
      outline: 'none',
      padding: '5px',
      overflow: 'auto',
      whiteSpace: 'nowrap' 
    },
    taskbar: {
      backgroundColor: Theme.TextEditorTaskbarColor,
      gridColumn: '1 / span 2',
      borderTop: `1px solid ${Theme.TextEditorBorderColor}`
    },
    colorPalette: {
      width: '50px',
      height: '60%',
      borderRadius: '7px',
      border: `1px solid ${Theme.TextEditorBorderColor}`,
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
    expanded: {
      position: 'absolute',
      top: '0',
      left: '0',
      height: '99.6vh',
      width: '99.85vw'
    },
    button: {
      backgroundColor: Theme.TextEditorToolbarColor
    }
  }
  const colorText = (color)=> {
    console.log(Editor.current.innerHTML)
    const selection = window.getSelection();
    const selectedText = selection.toString();
    const range = selection.getRangeAt(0);

    const coloredText = `<span style="color: ${color}; font-family: 'Ubuntu Mono', monospace;">${selectedText}</span>`;
    const span = document.createElement("span");
    span.innerHTML = coloredText;

    range.deleteContents();
    range.insertNode(span);
  }
  return (
    <div className="editor-wrapper" style={{...styles.editorContainer,  ...(isExpanded && styles.expanded)}}>
      <div className="toolbar" style={styles.toolBar}>
        <style>{ editorStyles }</style>
        <TextEditorIcon/>
        <button className="color-palette" onClick={()=>{colorText(Theme.kernelColor)}} style={{...styles.colorPalette, ...styles.kernelColor}}></button>
        <button className="color-palette" onClick={()=>{colorText(Theme.folderColor)}} style={{...styles.colorPalette, ...styles.folderColor}}></button>
        <button className="color-palette" onClick={()=>{colorText(Theme.accentColor)}} style={{...styles.colorPalette, ...styles.accentColor}}></button>
        <button className="color-palette" onClick={()=>{colorText(Theme.textColor)}} style={{...styles.colorPalette, ...styles.textColor}}></button>
        <HighlightBtn/>
        <div></div>
        <button className="delete-btn" style={styles.button} onClick={()=>{Editor.current.innerHTML = ''}}><DeleteBtn/></button>
        <button className="copy-btn" style={styles.button} onClick={()=>{navigator.clipboard.writeText(Editor.current.textContent)}}><CopyBtn/></button>
        <button className="expand-btn" style={styles.button} onClick={()=>{setIsExpanded(isExpanded === 0 ? 1 : 0)}}><ExpandBtn/></button>
      </div>
      <div className="line-count-bar" style={styles.lineCountBar}></div>
      <div className="editor" ref={Editor} style={styles.editor} contentEditable='true' spellCheck={false}>
        <div>cnc7@cnc7-Optiplex-3020:~$ ls *.txt</div>
        <div>employee.txt output.txt test.txt</div>
      </div>
      <div className="taskbar" style={styles.taskbar}></div>
    </div>
  )
}

export default TextEditor;