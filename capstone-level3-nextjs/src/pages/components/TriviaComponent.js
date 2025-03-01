import React, { useState, useEffect } from 'react';
import { checkAnswer } from '../controllers/triviaController';
import { trivia } from '../utils/triviaData';

const TriviaComponent = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);

    useEffect(() => {
        console.log('Component did mount');
        return () => {
            console.log('Component will unmount');
        };
    }, []);

    useEffect(() => {
        console.log('Component did update');
    });

    const displayTrivia = () => {
        if (currentQuestionIndex < trivia.length) {
            const questionObj = trivia[currentQuestionIndex];
            const choices = [...questionObj.distractors, questionObj.answer].sort(() => Math.random() - 0.5);

            return (
                <div>
                    <h2>{questionObj.question}</h2>
                    <div>
                        {choices.map((choice, index) => (
                            <button
                                key={index}
                                style={{
                                    backgroundColor: 'transparent',
                                    border: '2px solid purple',
                                    color: 'purple',
                                    padding: '10px 20px',
                                    borderRadius: '5px',
                                    cursor: 'pointer',
                                    margin: '10px'
                                }}
                                onClick={() => handleAnswer(choice, questionObj.answer)}
                            >
                                {choice}
                            </button>
                        ))}
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    <h2>Trivia Completed!</h2>
                    <p>Your final score is: {score}</p>
                </div>
            );
        }
    };

    const handleAnswer = (selected, correct) => {
        checkAnswer(selected, correct, setScore, setCurrentQuestionIndex);
        displayTrivia();
    };

    return (
        <div id="trivia-container">
            {displayTrivia()}
        </div>
    );
};

export default TriviaComponent;
