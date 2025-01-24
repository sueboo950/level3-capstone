import { displayTrivia } from './displayTrivia.js';
import { trivia } from '../modules/triviaData.js';

export function checkAnswer(selected, correct) {
    if (selected === correct) {
        score++;
    }
    currentQuestionIndex++;
    displayTrivia(trivia);
}
