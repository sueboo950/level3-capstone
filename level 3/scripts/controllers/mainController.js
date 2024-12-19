import { trivia } from './triviaData.js';
import { displayTrivia } from './triviaFunctions.js';

document.addEventListener('DOMContentLoaded', () => {
    displayTrivia(trivia);
});
