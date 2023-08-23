import React from "react";
// import Theme from '../../../Themes/Editor/Theme'
import { TextEditorIcon, HighlightBtn, ChangeThemeBtn, ExpandBtn, DeleteBtn, CopyBtn } from './Svg/Svg'
import { Theme } from "../../../Themes/Theme";
import { useRef } from "react";

function TextEditor() {
  const Editor = useRef(null);
  const styles = {
    editorContainer: {
      width: '500px',
      height: '400px',
      display: 'grid',
      gridTemplateColumns: '5% auto',
      gridTemplateRows: '10% auto 10%',
      border: `1px solid ${Theme.TextEditorBorderColor}`
    },
    toolBar: {
      backgroundColor: Theme.TextEditorToolbarColor,
      gridColumn: '1 / span 2',
      display: 'grid',
      gridTemplateColumns: 'auto auto auto auto auto 1fr auto auto auto auto auto',
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
      border: `1px solid ${Theme.TextEditorBorderColor}`
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
  const toKernelColor = (e)=> {
    // Editor.current.innerHTML = `<span style="color: pink"><div >00000</div><div style="color: red; font-family: 'Ubuntu Mono', 'monospace'">ksdnkfn</div></span>`
    const selection = window.getSelection();
    // console.log(selection.getRangeAt(0).startContainer)
    // console.log(selection.getRangeAt(0).startOffset)
    // console.log(selection.getRangeAt(0).endContainer)
    // console.log(selection.getRangeAt(0).endOffset)
    

    // console.log(selection.toString())
    console.log(Editor.current.innerHTML)
    const extract = selection.getRangeAt(0).extractContents();

    const tempContainer = document.createElement('div');
    tempContainer.appendChild(extract);
    const Hello = tempContainer.innerHTML;

    console.log(Hello.toString().replace(/div/g, 'span'))
    // selection.getRangeAt(0).insertNode(Hello)    
    // selection.getRangeAt(0).deleteContents()
    // const selectedRange = selection.getRangeAt(0);
    // const containerNode = document.getElementById('editor');

    // if (selectedRange.startContainer === containerNode) {
    //     // Selection starts at the beginning of the container
    //     const startOffset = selectedRange.startOffset;
    //     console.log('Selection starts at index:', startOffset);
    // } else {
    //     // Selection starts within a child node
    //     const textBeforeSelection = selectedRange.startContainer.textContent.substring(0, selectedRange.startOffset);
    //     const startOffset = textBeforeSelection.length;
    //     console.log('Selection starts at index:', startOffset);
    // }
  }
  return (
    <div style={styles.editorContainer}>
      <div className="toolbar" style={styles.toolBar}>
        <TextEditorIcon/>
        <button className="color-palette" onClick={toKernelColor} style={{...styles.colorPalette, ...styles.kernelColor}}></button>
        <button className="color-palette" style={{...styles.colorPalette, ...styles.folderColor}}></button>
        <button className="color-palette" style={{...styles.colorPalette, ...styles.accentColor}}></button>
        <button className="color-palette" style={{...styles.colorPalette, ...styles.textColor}}></button>
        <HighlightBtn/>
        <div></div>
        <ChangeThemeBtn/>
        <DeleteBtn/>
        <CopyBtn/>
        <ExpandBtn/>
      </div>
      <div className="line-count-bar" style={styles.lineCountBar}></div>
      <div className="editor" ref={Editor} style={styles.editor} contentEditable='true'>dfd</div>
      <div className="taskbar" style={styles.taskbar}></div>
    </div>
  )
}

export default TextEditor;