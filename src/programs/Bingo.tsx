import { PlasmaWindowContext } from "@/components/PlasmaWindow";
import { Program } from "@/lib/Program";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { h } from 'preact';
import { useContext } from "preact/hooks";

export const BingoProgram = new Program({
  name: 'Bingo',
  icon: faFile,
  WindowContents,
  options: {
    resizable: true,
    width: 500,
    height: 500,
    minWidth: 300,
    minHeight: 300,
    maxHeight: 700,
    maxWidth: 700,
  }
});

function WindowContents() {
  const props = useContext(PlasmaWindowContext);
  return <span><iframe width='100%' height='100%' src="/bingo" frameBorder="0"></iframe></span>;
}