// ../controllers/triviaController.js

export const checkAnswer = (selected, correct) => {
    if (selected === correct) {
        setScore((prevScore) => prevScore + 1);
    }
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
};


