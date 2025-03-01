// components/TriviaComponent.js
import React from 'react';
import { trivia } from '../utils/triviaData';

const TriviaComponent = () => {
    return (
        <div>
            <h1>Bible Trivia</h1>
            <ul>
                {trivia.map((item, index) => (
                    <li key={index}>
                        <strong>Question:</strong> {item.question}
                        <br />
                        <strong>Answer:</strong> {item.answer}
                        <br />
                        <strong>Distractors:</strong>
                        <ul>
                            {item.distractors.map((distractor, i) => (
                                <li key={i}>{distractor}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TriviaComponent;
