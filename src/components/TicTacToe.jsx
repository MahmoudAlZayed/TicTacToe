// Hooks
import { useRef, useState } from "react";

//Style
import "../ticTacToe.css";

//images

import circle from "../assets/circle.png";
import cross from "../assets/cross.png";
// import redLine from "../assets/redLine.png";

let data = ["", "", "", "", "", "", "", "", ""];

export default function TicTacToe() {
  let [count, setCount] = useState(0);
  let [gameOver, setGameOver] = useState(false);
  let [turn, setTurn] = useState("X Turn");
  const myRef = useRef(null);

  let box1 = useRef(null);
  let box2 = useRef(null);
  let box3 = useRef(null);
  let box4 = useRef(null);
  let box5 = useRef(null);
  let box6 = useRef(null);
  let box7 = useRef(null);
  let box8 = useRef(null);
  let box9 = useRef(null);

  let boxArray = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

  const boxClicked = (box, index) => {
    if (gameOver === true) {
      return 0;
    }
    if (count % 2 === 0) {
      box.target.innerHTML = `<img src = ${cross} >`;
      data[index] = "x";
      setCount(++count);
      setTurn("O Turn");
    } else {
      box.target.innerHTML = `<img src = ${circle} >`;
      data[index] = "o";
      setCount(++count);
      setTurn("X Turn");
    }

    console.log(count);
    checkWin();
  };

  const checkWin = () => {
    if (data[0] === data[1] && data[1] === data[2] && data[2] != "") {
      won(data[0]);
    } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
      won(data[3]);
    } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
      won(data[6]);
    } else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
      won(data[0]);
    } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
      won(data[1]);
    } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
      won(data[2]);
    } else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
      won(data[0]);
    } else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
      won(data[2]);
    } else if (
      data[0] !== "" &&
      data[1] !== "" &&
      data[2] !== "" &&
      data[3] !== "" &&
      data[4] !== "" &&
      data[5] !== "" &&
      data[6] !== "" &&
      data[7] !== "" &&
      data[8] !== ""
    ) {
      myRef.current.innerHTML = `Draw`;

      setGameOver(true);
      setTurn("");
    }
    console.log(data);
  };
  const won = (winner) => {
    setGameOver(true);
    if (winner === "x") {
      myRef.current.innerHTML = `<img src = ${cross} > Win`;
      boxArray.map((e) => {
        e.current.style.pointerEvents = "none";
      });
      setTurn("");
    } else if (winner === "o") {
      myRef.current.innerHTML = `<img src = ${circle} > Win`;
      boxArray.map((e) => {
        e.current.style.pointerEvents = "none";
      });
      setTurn("");
    }
  };

  const reset = () => {
    setGameOver(false);
    data = ["", "", "", "", "", "", "", "", ""];
    myRef.current.innerHTML = "Tic Tac Toe";
    boxArray.map((e) => {
      e.current.innerHTML = "";
      e.current.style.pointerEvents = "auto";
    });
    setCount(0);
    setTurn("X Turn");
  };
  return (
    <>
      <h1 ref={myRef}>Tic Tac Toe</h1>
      <h2>{turn}</h2>
      <div className="gameContainer">
        <div className="row1">
          <div
            className="boxes"
            onClick={(box) => {
              boxClicked(box, 0);
              box1.current.style.pointerEvents = "none";
            }}
            ref={box1}
          ></div>
          <div
            className="boxes"
            onClick={(box) => {
              boxClicked(box, 1);
              box2.current.style.pointerEvents = "none";
            }}
            ref={box2}
          ></div>
          <div
            className="boxes"
            onClick={(box) => {
              boxClicked(box, 2);
              box3.current.style.pointerEvents = "none";
            }}
            ref={box3}
          ></div>
        </div>
        <div className="row2">
          <div
            className="boxes"
            onClick={(box) => {
              boxClicked(box, 3);
              box4.current.style.pointerEvents = "none";
            }}
            ref={box4}
          ></div>
          <div
            className="boxes"
            onClick={(box) => {
              boxClicked(box, 4);
              box5.current.style.pointerEvents = "none";
            }}
            ref={box5}
          ></div>
          <div
            className="boxes"
            onClick={(box) => {
              boxClicked(box, 5);
              box6.current.style.pointerEvents = "none";
            }}
            ref={box6}
          ></div>
        </div>
        <div className="row3">
          <div
            className="boxes"
            onClick={(box) => {
              boxClicked(box, 6);
              box7.current.style.pointerEvents = "none";
            }}
            ref={box7}
          ></div>
          <div
            className="boxes"
            onClick={(box) => {
              boxClicked(box, 7);
              box8.current.style.pointerEvents = "none";
            }}
            ref={box8}
          ></div>
          <div
            className="boxes"
            onClick={(box) => {
              boxClicked(box, 8);
              box9.current.style.pointerEvents = "none";
            }}
            ref={box9}
          ></div>
        </div>
      </div>
      <button onClick={reset}>Reset</button>
    </>
  );
}
