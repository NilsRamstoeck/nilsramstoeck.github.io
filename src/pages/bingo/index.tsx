import { h, Fragment, render } from "preact";
import { Bingo } from "@/components/bingo/Bingo";
import '@/style/bingo.css';
import "@/style/fullscreen.css";
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
    <link rel="stylesheet" href="./index.css" />
    <Bingo></Bingo>
  </>;
};