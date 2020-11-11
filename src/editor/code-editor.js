import React from "react";

import Editor from "@monaco-editor/react";

const CodeEditor = (props) => {
  return (
    <>
      <Editor
        theme="dark"
        language="javascript"
        value={props.text}
        // editorDidMount={handleEditorDidMount}
      />
    </>
  );
}

export default CodeEditor;