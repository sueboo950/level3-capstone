export const checkAnswer = (selected, correct, setScore, setCurrentQuestionIndex) => {
    if (selected === correct) {
        setScore((prevScore) => prevScore + 1);
    }
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
};
