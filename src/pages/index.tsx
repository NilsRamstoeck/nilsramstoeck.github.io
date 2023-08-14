import { BootScreen } from "@/components/BootScreen";
import { LazyLoaded } from "@/lib/LazyLoaded";
import { h, Fragment, render } from "preact";
import "@/style/colors.css";
import "@/style/Plasma.css";
import "@/style/fullscreen.css";
import "normalize.css";

const root = document.getElementById('root');
const MODULES_PATH = ['modules'];

const BREAKPOINTS = {
  'DESKTOP': { at: 1200, module: 'Desktop.js' },
  'TABLET': { at: 990, module: 'Tablet.js' },
  'PHONE': { at: 575, module: 'Phone.js' },
} as const;


if (!root) throw new Error('<preact> No root element');

(async () => {
  const module = getModuleFromBreakpoint();
  render(h(App, { module }), root);
})();


type Props = {
  module: string;
};

function App({ module }: Props) {
  return <>
    <link rel="stylesheet" href="./index.css" />
    <LazyLoaded fallback={<BootScreen></BootScreen>} module={module}></LazyLoaded>
  </>;
};

function getModuleFromBreakpoint() {
  for (const key in BREAKPOINTS) {
    const breakpoint = BREAKPOINTS[key as keyof typeof BREAKPOINTS];
    if (window.visualViewport.width > breakpoint.at) {
      //start array with emtpy string to prefix path with a slash
      return ['', ...MODULES_PATH, breakpoint.module].join('/');
    }
  }
  throw new Error('Could not resolve breakpoint to module');
}