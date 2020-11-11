document.addEventListener("DOMContentLoaded", () => {
  const width = 10;
  const grid = document.querySelector(".grid");
  let squares = Array.from(document.querySelectorAll(".grid div"));
  const ScoreDisplay = document.querySelector("#score");
  const StartButton = document.querySelector("#start-button");
  console.log(squares);

  //The Tetrominoes
  const lTetromino = [
    [1, width + 1, width * 2 + 1, 2],
    [width, width + 1, width + 2, width * 2 + 2],
    [1, width + 1, width * 2 + 1, width * 2],
    [width, width * 2, width * 2 + 1, width * 2 + 2],
  ];

  const zTetromino = [
    [0, width, width + 1, width * 2 + 1],
    [width + 1, width + 2, width * 2, width * 2 + 1],
    [0, width, width + 1, width * 2 + 1],
    [width + 1, width + 2, width * 2, width * 2 + 1],
  ];

  const tTetromino = [
    [1, width, width + 1, width + 2],
    [1, width + 1, width + 2, width * 2 + 1],
    [width, width + 1, width + 2, width * 2 + 1],
    [1, width, width + 1, width * 2 + 1],
  ];

  const oTetromino = [
    [0, 1, width, width + 1],
    [0, 1, width, width + 1],
    [0, 1, width, width + 1],
    [0, 1, width, width + 1],
  ];

  const iTetromino = [
    [1, width + 1, width * 2 + 1, width * 3 + 1],
    [width, width + 1, width + 2, width + 3],
    [1, width + 1, width * 2 + 1, width * 3 + 1],
    [width, width + 1, width + 2, width + 3],
  ];

  const theTetrominoes = [
    lTetromino,
    zTetromino,
    tTetromino,
    oTetromino,
    iTetromino,
  ];

  let currentPosition = 4;
  let currentRotation = 0;

  //randomly select a tetrominoes first rotation
  let random = Math.floor(Math.random() * theTetrominoes.length);
  let current = theTetrominoes[random][currentRotation];

  function draw() {
    current.forEach((item) => {
      squares[currentPosition + item].classList.add("tetromino");
    });
  }

  function undraw() {
    current.forEach((item) => {
      squares[currentPosition + item].classList.remove("tetromino");
    });
  }

  // Move tetromino down
  let timerId = setInterval(moveDown, 1000);

  function moveDown() {
    undraw();
    currentPosition += width;
    draw();
    freeze();
  }

  // freeze function to stop tetromino when it gets to the bottom
  function freeze() {
    if (current.some((index) => squares[currentPosition + index + width].classList.contains("taken")))
    {
      current.forEach(item => squares[currentPosition + item].classList.add("taken"));
        // start a new tetromino falling
        random = Math.floor(Math.random() * theTetrominoes.length);
        current = theTetrominoes[random][currentRotation];
        currentPosition = 4;
        draw();
    }
  }
});
