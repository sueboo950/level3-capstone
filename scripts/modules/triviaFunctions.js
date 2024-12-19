import { shuffleArray } from '../utils/utils.js';

export let currentQuestionIndex = 0;
export let score = 0;

export function displayTrivia(trivia) {
    if (currentQuestionIndex < trivia.length) {
        const questionObj = trivia[currentQuestionIndex];
        const choices = shuffleArray([...questionObj.distractors, questionObj.answer]);

        document.getElementById('question').innerText = questionObj.question;
        const choicesContainer = document.getElementById('choices');
        choicesContainer.innerHTML = '';

        choices.forEach(choice => {
            const button = document.createElement('button');
            button.innerText = choice;
            button.classList.add('btn', 'btn-primary', 'm-2');
            button.onclick = () => checkAnswer(choice, questionObj.answer);
            choicesContainer.appendChild(button);
        });
    } else {
        document.getElementById('question').innerText = 'Trivia Completed!';
        document.getElementById('choices').innerHTML = '';
        document.getElementById('score').innerText = `Your final score is: ${score}`;
    }
}

export function checkAnswer(selected, correct) {
    if (selected === correct) {
        score++;
    }
    currentQuestionIndex++;
    displayTrivia(trivia);
}
