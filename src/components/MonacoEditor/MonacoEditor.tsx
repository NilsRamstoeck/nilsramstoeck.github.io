import { h } from "preact";
import { editor } from 'monaco-editor';
import JSONWorker from 'monaco-editor/esm/vs/language/json/json.worker.js';
import CSSWorker from 'monaco-editor/esm/vs/language/css/css.worker.js';
import HTMLWorker from 'monaco-editor/esm/vs/language/html/html.worker.js';
import JSWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker.js';
import EditorWorker from 'monaco-editor/esm/vs/editor/editor.worker.js';
import { useEffect, useRef, useState } from "preact/hooks";
import style from './style.css';

type Props = {

};

self.MonacoEnvironment = {
  getWorkerUrl: function (_moduleId, label) {
    if (label === 'json') {
      return JSONWorker.path;
    }
    if (label === 'css' || label === 'scss' || label === 'less') {
      return CSSWorker.path;
    }
    if (label === 'html' || label === 'handlebars' || label === 'razor') {
      return HTMLWorker.path;
    }
    if (label === 'typescript' || label === 'javascript') {
      return JSWorker.path;
    }
    return EditorWorker.path;
  }
};


export function MonacoEditor({ }: Props) {

  const editorRef = useRef(null);
  const [editorInstance, setEditorInstance] = useState<editor.IStandaloneCodeEditor>();

  useEffect(() => {
    if (editorRef) {
      setEditorInstance((editorInstance) => {
        if (editorInstance) return editorInstance;

        return editor.create(editorRef.current!, {
          value: ['function x() {', '\tconsole.log("Hello world!");', '}'].join('\n'),
          language: 'typescript'
        });
      });
    }

    return () => editorInstance?.dispose();
  }, [editorRef.current]);

  return <div ref={editorRef} className="monaco-container">
    <style>{style}</style>
  </div>;
}