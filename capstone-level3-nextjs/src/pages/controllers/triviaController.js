import React, { useState } from 'react';

const QuizComponent = () => {
    const [score, setScore] = useState(0);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const checkAnswer = (selected, correct) => {
        if (selected === correct) {
            setScore((prevScore) => prevScore + 1);
        }
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    };

    // Example question and answer
    const question = { text: "What is 2 + 2?", options: [2, 3, 4], correct: 4 };

    return (
        <div>
            <h2>Quiz</h2>
            <p>{question.text}</p>
            {question.options.map((option, index) => (
                <button key={index} onClick={() => checkAnswer(option, question.correct)}>
                    {option}
                </button>
            ))}
            <p>Score: {score}</p>
        </div>
    );
};

export default QuizComponent;

