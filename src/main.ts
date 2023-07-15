import { HelloWorld } from "@/components/HelloWorld";
import { h, render } from "preact";

const root = document.getElementById('root');

if (!root) throw new Error('<preact> No root element');

render(h(HelloWorld, {}), root);