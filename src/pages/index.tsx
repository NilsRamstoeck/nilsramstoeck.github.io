import { BootScreen } from "@/components/BootScreen";
import { LazyLoaded } from "@/lib/LazyLoaded";
import { h, Fragment, render } from "preact";
import colors from "@/style/colors.css";
import style from "@/style/index.css";

const root = document.getElementById('root');
const MODULES_PATH = ['modules'];

const BREAKPOINTS = {
  'PHONE': { at: 575, module: 'Phone.js' },
  'TABLET': { at: 990, module: 'Tablet.js' },
  'DESKTOP': { at: 1200, module: 'Desktop.js' },
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
    <style>{colors}{style}</style>
    <LazyLoaded fallback={<BootScreen></BootScreen>} module={''}></LazyLoaded>
  </>;
};

function getModuleFromBreakpoint() {
  for (const key in BREAKPOINTS) {
    const breakpoint = BREAKPOINTS[key as keyof typeof BREAKPOINTS];
    console.log(window.visualViewport.width <= breakpoint.at);
    if (window.visualViewport.width <= breakpoint.at) {
      //start array with emtpy string to prefix path with a slash
      return ['', ...MODULES_PATH, breakpoint.module].join('/');
    }
  }
  throw new Error('Could not resolve breakpoint to module');
}