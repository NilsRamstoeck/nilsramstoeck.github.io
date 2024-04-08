import { Program } from "@/lib/Program";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { h } from 'preact';
import "@/style/bingo.css";
import { Bingo } from "@/components/bingo/Bingo";

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
  return <Bingo></Bingo>;
}