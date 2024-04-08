import { Board } from "@/components/bingo/Board";
import { h } from "preact";

export function Bingo() {
  return <div className="bingo-container">
    <img id="logo" src="/bingo/bingo.png" alt="" />
    <Board></Board>
  </div>;
}