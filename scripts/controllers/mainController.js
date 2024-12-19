import { trivia } from '../modules/triviaData.js';
import { displayTrivia, checkAnswer } from '../modules/triviaFunctions.js';
import { GridSystem } from '../utils/gridSystem.js';
import { Card } from '../utils/card.js';
import { ListGroup } from '../utils/listGroup.js';

window.displayTrivia = displayTrivia;
window.checkAnswer = checkAnswer;
window.GridSystem = GridSystem;
window.Card = Card;
window.ListGroup = ListGroup;

document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('startButton');
    startButton.addEventListener('click', () => {
        displayTrivia(trivia);
        startButton.style.display = 'none'; // Hide the start button once the game starts
    });
});
