import { Program } from "@/lib/Program";
import { h } from "preact";

export const MonacoEditorProgram = new Program({
  name: 'Monaco Editor',
  WindowContents,
  options: {
    minHeight: 200,
    height: 300,
    minWidth: 200,
    width: 700,
    resizable: true
  }
});

function WindowContents() {
  return <iframe src="/monaco" width="100%" height="100%" frameBorder="0"></iframe>;
}