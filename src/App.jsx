

import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [player, setPlayer] = useState("X");
  const [winner, setWinner] = useState("");

  const handleClick = (index) => {
    if (board[index] !== "" || winner !== "") {
      return;
    }

    let newBoard = [...board];

    newBoard[index] = player;
    setBoard(newBoard);

    const win = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];

    let result = win.some((c) =>
      c.every((i) => newBoard[i] === player)
    );

    if (result) {
      setWinner(player);
    } else if (newBoard.every((c) => c !== "")) {
      setWinner("Draw");
    } else {
      setPlayer(player === "X" ? "O" : "X");
    }
  };

  const restartGame = () => {
    setBoard(Array(9).fill(""));
    setPlayer("X");
    setWinner("");
  };

  return (
    <div className="game">
      <h1>XO GAME</h1>

      <h3>
        {winner
          ? winner === "Draw" ? "Game Draw!" : winner + " Wins!"
          : "Player " + player + "'s Turn"}
      </h3>

      <div className="board">
        {board.map((c, i) => (
          <button
            className="cell"
            key={i}
            onClick={() => handleClick(i)}
            disabled={c !== "" || winner !== ""}
          >
            {c}
          </button>
        ))}
      </div>

      <button className="restart" onClick={restartGame}>
        Restart Game
      </button>
    </div>
  );
}































// import Registration from "./Registration";
// import "./App.css";

// function App() {
//   return (
//     <Registration />
//   );
// }

// export default App;
