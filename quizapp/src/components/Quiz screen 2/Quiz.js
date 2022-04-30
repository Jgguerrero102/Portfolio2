import React, {useState} from "react";

function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState(0);

    return <div className="Quiz">
        <h1>{Quiz[currentQuestion].prompt}</h1>
        <div className="options">
            <button>{Questions[currentQuestion].optionA}</button>
            <button>{Questions[currentQuestion].optionB}</button>
            <button>{Questions[currentQuestion].optionC}</button>
            <button>{Questions[currentQuestion].optionD}</button>
        </div>

        <button> Next Question</button>
    </div>;
}

export default Quiz;