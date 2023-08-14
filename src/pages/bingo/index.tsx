import { h, Fragment, render } from "preact";
import { Board } from "@/components/bingo/Board";
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
    <img id="logo" src="bingo.png" alt="" />
    <Board></Board>
  </>;
};