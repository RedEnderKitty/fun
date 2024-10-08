// Define HTML elements
const board = document.getElementById('game-board');

// Define game bariables
let snake = [{ x: 10, y: 10 }]
//Draw Game App
function draw() {
    board.innerHTML = '';
    drawSnake();
}

//Draw Snake
function drawSnake() {
    snake.forEach((segment) => {
        const snakeElement = createGameElement('div', 'snake');
        SVGTextPositioningElement(snakeElement, segment);
    });
}

// Create a snake or food cube/div
function createGameElement(tag, className) {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

//Set the position of the snake or the food.
function setPosition(element, position) [
    element.style.gridColumn = position.x;
]