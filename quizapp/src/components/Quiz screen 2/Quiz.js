import React, {useState} from "react";

function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState(0);

    return <div className="Quiz">
        <h1>{Quiz[currentQuestion].prompt}</h1>
        <div className="options">
            <button onClick={() => setOptionChosen("A")}>{Questions[currentQuestion].optionA}</button>
            <button onClick={() => setOptionChosen("B")}>{Questions[currentQuestion].optionB}</button>
            <button onClick={() => setOptionChosen("C")}>{Questions[currentQuestion].optionC}</button>
            <button onClick={() => setOptionChosen("D")}>{Questions[currentQuestion].optionD}</button>
        </div>

        <button> Next Question</button>
    </div>;
}

export default Quiz;