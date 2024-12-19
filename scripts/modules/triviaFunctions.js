let currentQuestionIndex = 0;
let score = 0;

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export function displayTrivia(trivia) {
    const questionContainer = document.getElementById('question');
    const choicesContainer = document.getElementById('choices');
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';
    submitButton.id = 'submitButton';
    submitButton.disabled = true;  // Initially disable the button
    submitButton.onclick = () => checkAnswer(trivia);

    if (currentQuestionIndex < trivia.length) {
        const questionObj = trivia[currentQuestionIndex];
        const choices = shuffleArray([...questionObj.distractors, questionObj.answer]);

        // Create and display question using Card
        const questionCard = new Card("Question", questionObj.question);
        questionContainer.innerHTML = questionCard.generateCard();

        // Create and display choices using radio buttons
        choicesContainer.innerHTML = '';
        choices.forEach((choice, index) => {
            const choiceLabel = document.createElement('label');
            choiceLabel.classList.add('list-group-item');

            const choiceInput = document.createElement('input');
            choiceInput.type = 'radio';
            choiceInput.name = 'choice';
            choiceInput.value = choice;
            choiceInput.onchange = () => {
                // Enable the submit button when an option is selected
                submitButton.disabled = false;
            };

            const choiceDiv = document.createElement('div');
            choiceLabel.appendChild(choiceInput);
            choiceLabel.appendChild(document.createTextNode(choice));
            choiceDiv.appendChild(choiceLabel);
            choicesContainer.appendChild(choiceDiv);
        });

        // Add the submit button after the choices
        choicesContainer.appendChild(submitButton);
    } else {
        questionContainer.innerHTML = 'Trivia Completed!';
        choicesContainer.innerHTML = '';
        document.getElementById('score').innerText = `Your final score is: ${score}`;
    }
}

export function checkAnswer(trivia) {
    const selectedOption = document.querySelector('input[name="choice"]:checked');
    if (selectedOption) {
        const selectedAnswer = selectedOption.value;
        const correctAnswer = trivia[currentQuestionIndex].answer;
        if (selectedAnswer === correctAnswer) {
            score += 1; // Update score if the answer is correct
            alert('Correct!');
        } else {
            alert('Incorrect!');
        }
        currentQuestionIndex += 1; // Move to the next question
        displayTrivia(trivia); // Continue to the next question
    }
}
