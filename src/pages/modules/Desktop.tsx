import { DesktopEnviroment } from "@/components/DesktopEnviroment";
import { h, Fragment } from "preact";

export default () => {
  return <>
    <link rel="stylesheet" href="/modules/Desktop.css" />
    <DesktopEnviroment></DesktopEnviroment>
  </>;
};