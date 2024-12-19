export function displayTrivia(trivia) {
    const questionContainer = document.getElementById('question');
    const choicesContainer = document.getElementById('choices');

    if (currentQuestionIndex < trivia.length) {
        const questionObj = trivia[currentQuestionIndex];
        const choices = shuffleArray([...questionObj.distractors, questionObj.answer]);

        // Create and display question using Card
        const questionCard = new Card("question", questionObj.question);
        questionContainer.innerHTML = questionCard.generateCard();

        // Create and display choices using ListGroup
        const choicesList = new ListGroup(choices);
        choicesContainer.innerHTML = choicesList.generateListGroup();

        // Attach event listeners to choices
        const choiceButtons = choicesContainer.querySelectorAll('.list-group-item');
        choiceButtons.forEach(button => {
            button.onclick = () => checkAnswer(button.textContent, questionObj.answer);
        });
    } else {
        questionContainer.innerHTML = 'Trivia Completed!';
        choicesContainer.innerHTML = '';
        document.getElementById('score').innerText = `Your final score is: ${score}`;
    }
}
