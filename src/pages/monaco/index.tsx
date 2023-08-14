import { h, render, Fragment } from "preact";
import { MonacoEditor } from "@/components/MonacoEditor";
import "normalize.css";
const root = document.getElementById('root');

if (!root) throw new Error('<preact> No root element');

(async () => {
  render(h(App, {}), root);
})();


type Props = {
};

function App({ }: Props) {
  return <>
    <link rel="stylesheet" href="index.css" />
    <MonacoEditor></MonacoEditor>;
  </>;
}