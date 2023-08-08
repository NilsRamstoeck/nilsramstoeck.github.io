import { h, Fragment, render } from "preact";
import style from '@/style/bingo.css';
import { Board } from "@/components/bingo/Board";
const root = document.getElementById('root');

if (!root) throw new Error('<preact> No root element');

(async () => {
  render(h(App, {}), root);
})();


type Props = {
};

function App({ }: Props) {
  return <>
    <style>{style}</style>
    <img id="logo" src="bingo.png" alt="" />
    <Board></Board>
  </>;
};