import "./App.css";
import React, {useState} from "react"; 

function EndScreen() {
    const { score } = useState(Quiz);
    return (
        <div className="EndScreen">
            {" "}
            <h1>Quiz Finished</h1>
            <h3>{score} / {Questions.length}</h3>
        </div>
    )
}

export default EndScreen;