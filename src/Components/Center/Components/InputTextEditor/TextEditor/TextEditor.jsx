import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import {EditorView} from "@codemirror/view";



let myTheme = EditorView.theme({
  "&": {
    color: "white",
    backgroundColor: "#034"
  },
  ".cm-content": {
    caretColor: "#0e9"
  },
  "&.cm-focused .cm-cursor": {
    borderLeftColor: "#0e9"
  },
  "&.cm-focused .cm-selectionBackground, ::selection": {
    backgroundColor: "#074"
  },
  ".cm-gutters": {
    backgroundColor: "#045",
    color: "#ddd",
    border: "none"
  },
  ".cm-content, .cm-gutter": {minHeight: "400px"}
}, {dark: true})

function TextEditor() {
  const onChange = React.useCallback((value, viewUpdate) => {
    console.log('value:', value);
  }, []);
  return (
    <CodeMirror
      value="console.log('hello world!');"
      // height="500px"
      // width='200px'
      onChange={onChange}
      theme={myTheme}
    />
  );
}
export default TextEditor;
