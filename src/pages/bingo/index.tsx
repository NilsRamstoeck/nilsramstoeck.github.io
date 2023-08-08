import { h, Fragment, render } from "preact";

const root = document.getElementById('root');

if (!root) throw new Error('<preact> No root element');

(async () => {
  render(h(App, {}), root);
})();


type Props = {
};

function App({}: Props) {
  return <>
  Bongo!
  </>;
};