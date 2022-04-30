import "./App.css";
import React, {useState} from "react"; 

function EndScreen() {
    const { score } = useState(Quiz);
    return (
        <div className="EndScreen">
            {" "}
            <h1>Quiz Finished</h1>
            <h3>{score} / {Questions.length}</h3>
            <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
    )
}

export default EndScreen;