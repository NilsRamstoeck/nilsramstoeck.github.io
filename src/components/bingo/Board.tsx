import { h } from "preact";

export function Board() {
  return <div className="board">
    <img src="bingo_board.png" alt="" />
    <div className="fields">
      {
        (() => [...new Array(25)].map(_ =>
          <div className="field" onDblClick={({ currentTarget }) => currentTarget.classList.toggle('marked')} contentEditable={true}></div>
        ))()
      }
    </div>
  </div>;
}