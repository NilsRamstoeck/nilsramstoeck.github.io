import{a as o,e,g as i,j as t}from"../chunk-P25D4DJI.js";var r=`#logo {
  max-width: 100%;
}

body {
  padding: 0;
  margin: 0;
  font-size: min(2vw, 2vh );
}

body, html, #root{
  height: 100%;
}

#root {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
}

.board {
  position: relative;
  width: min(80vh, 80vw);
  height: min(80vh, 80vw);
}

.board>img {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 999;
  pointer-events: none;
}

.board>.fields {
  position: absolute;
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-template-rows: repeat(5, auto);
  font-size: 1.1em;
  left: min(9vw, 9vh);
  top: min(7vw, 7vh);
}

.board>.fields>.field {
  background-color: white;
  width: calc(min(63vh, 63vw) / 5);
  height: calc(min(65vh, 65vw) / 5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.board>.fields>.field.marked {
  background-image: url('marked.png');
  background-size: cover;
}

.board>.fields>.field:hover {
  filter: brightness(80%);
}`;function n(){return e("div",{className:"board"},e("img",{src:"bingo_board.png",alt:""}),e("div",{className:"fields"},(()=>[...new Array(25)].map(m=>e("div",{className:"field",onDblClick:({currentTarget:a})=>a.classList.toggle("marked"),contentEditable:!0})))()))}o(n,"Board");var d=document.getElementById("root");if(!d)throw new Error("<preact> No root element");(async()=>t(e(s,{}),d))();function s({}){return e(i,null,e("style",null,r),e("img",{id:"logo",src:"bingo.png",alt:""}),e(n,null))}o(s,"App");
