import React from "react";
import { connect } from "react-redux";
import { useState, useRef } from "react";
import { TextEditorIcon, HighlightBtn, ExpandBtn, DeleteBtn, CopyBtn } from './Svg/Svg'

const TextEditor = (props)=> {
  const [isExpanded, setIsExpanded] = useState(0);
  const Editor = useRef(null);

  const styles = `
    .editor-container {
      width: 90%;
      max-width: 1000px;
      height: 450px;
      display: grid;
      grid-template-columns: 30px auto;
      grid-template-rows: 40px auto 35px;
      border: 1px solid ${props.Theme.textEditorBorderColor};
      border-radius: 15px;
      overflow: hidden;
    }
    .toolbar {
      background-color: ${props.Theme.textEditorToolbarBgColor};
      grid-column: 1 / span 2;
      display: grid;
      grid-template-columns: auto auto auto auto 1fr auto auto auto auto;
      align-items: center;
      gap: 10px;
      padding: 0 15px 0 10px;
      border-bottom: 1px solid ${props.Theme.textEditorBorderColor};
    }
    .line-count-bar {
      background-color: ${props.Theme.textEditorTaskbarBgColor};
      border-right: 1px solid ${props.Theme.textEditorBorderColor};
    }
    .editor {
      background-color: ${props.Theme.kernelColor};
      font-family: 'Ubuntu Mono', monospace;
      outline: none;
      padding: 5px;
      overflow: auto;
      white-space: nowrap;
    }
    .taskbar {
      background-color: ${props.Theme.textEditorTaskbarBgColor};
      grid-column: 1 / span 2;
      border-top: 1px solid ${props.Theme.textEditorBorderColor};
    }
    .color-palette {
      width: 50px;
      height: 60%;
      border-radius: 7px;
      border: 1px solid #353535;
    }
    .path-color {
      background-color: ${props.Theme.pathColor};
    }
    .folder-color {
      background-color: ${props.Theme.folderColor};
    }
    .text-color {
      background-color: ${props.Theme.textColor};
    }
    .expanded {
      max-width: none;
      position: absolute;
      top: 0;
      left: 0;
      height: 99.55vh;
      width: 99.85vw;
    }
    .tool-btn {
      background-color: ${props.Theme.textEditorToolbarBgColor};
      margin-right: 5px;
    }
    .editor > * {
      font-family: 'Ubuntu Mono', monospace;
      color: ${props.Theme.textColor};
    }
    @media(max-width: 400px) {
      .delete-btn, .copy-btn {
          display: none;
      }
  }
  `
  const colorText = (color)=> {
    const selection = window.getSelection();
    const selectedText = selection.toString();
    const range = selection.getRangeAt(0);

    const coloredText = `<span style="color: ${color}; font-family: 'Ubuntu Mono', monospace;">${selectedText}</span>`;
    const span = document.createElement("span");
    span.innerHTML = coloredText;

    range.deleteContents();
    range.insertNode(span);
  };

  return (
    <>
      <style> {styles} </style>
      <div className={`editor-container ${isExpanded ? 'expanded': ''}`}>
        <div className="toolbar">
          <TextEditorIcon color={props.Theme.textEditorToolbarFgColor}/>

          <button className="color-palette path-color"   onClick={()=>{colorText(props.Theme.pathColor)}}></button>
          <button className="color-palette folder-color" onClick={()=>{colorText(props.Theme.folderColor)}}></button>
          <button className="color-palette text-color"   onClick={()=>{colorText(props.Theme.textColor)}}></button>

          <HighlightBtn color={props.Theme.textEditorToolbarFgColor}/>

          <div></div>

          <button className="tool-btn delete-btn" onClick={()=>{Editor.current.innerHTML = ''}}>
            <DeleteBtn color={props.Theme.textEditorToolbarFgColor}/>
          </button>
          <button className="tool-btn copy-btn" onClick={()=>{navigator.clipboard.writeText(Editor.current.textContent)}}>
            <CopyBtn color={props.Theme.textEditorToolbarFgColor}/>
          </button>
          <button className="tool-btn expand-btn" onClick={()=>{setIsExpanded(isExpanded === 0 ? 1 : 0)}}>
            <ExpandBtn color={props.Theme.textEditorToolbarFgColor}/>
          </button>
        </div>

        <div className="line-count-bar"></div>

        <div className="editor" ref={Editor} contentEditable spellCheck="false">
          <div>cnc7@cnc7-Optiplex-3020:~$ ls *.txt</div>
          <div>employee.txt output.txt test.txt</div>
        </div>

        <div className="taskbar"></div>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    Theme: state.Theme
  };
};

export default connect(
  mapStateToProps
)(TextEditor);