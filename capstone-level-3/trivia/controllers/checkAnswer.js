import { displayTrivia } from './displayTrivia.js';
import { incrementQuestionIndex, incrementScore } from './triviaState.js';

export function checkAnswer(selected, correct) {
    if (selected === correct) {
        incrementScore();
    }
    incrementQuestionIndex();
    displayTrivia();
}
