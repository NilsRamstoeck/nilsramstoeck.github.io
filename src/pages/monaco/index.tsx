import { h, render } from "preact";
import { MonacoEditor } from "@/components/MonacoEditor";
const root = document.getElementById('root');

if (!root) throw new Error('<preact> No root element');

(async () => {
  render(h(App, {}), root);
})();


type Props = {
};

function App({ }: Props) {
  return <MonacoEditor></MonacoEditor>;
}