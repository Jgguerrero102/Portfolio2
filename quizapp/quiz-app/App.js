import { StatusBar } from 'expo-status-bar';
import { useCallback, useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import { Card, CheckBox } from 'react-native-elements';

export default function App() {
const questions = [
  {
    questionText: "How many moons does the Earth have?",
    multipleAnswers: true,
    answerOptions: [
      { correct: true, answerText: "1" },
      { correct: false, answerText: "2" },
      { correct: false, answerText: " 3" },
      { correct: false, answerText: "4" }
    ]
  },
  {
    questionText: "True or False: Gravity has less of an effect in space",
    multipleAnswers: true,
    answerOptions: [
      { correct: false, answerText: "False" },
      { correct: true, answerText: "True" },
    ]
  },
  {
    questionText: "Mass x Gravity = ",
    multipleAnswers: true,
    answersOptions: [
      { correct: true, answerText: "Weight" },
    ]
  },
];

const [currentQuestion, setCurrentQuestion] = useState(0);

const [showScore, setShowScore] = useState(false);

const [score, setScore] = useState(0);

const handleAnswerButtonClick = () => {
    if (isCorrect===true){
      alert("this answer is correct!");
    }


const nextQuestion = currentQuestion + 1;
if(nextQuestion < questions.length) {
setCurrentQuestion(nextQuestion);
} else {
  setShowScore(true);
}
}

return (
 <div className='app'>
 {showScore ? (
   <div className='score'> You {score} 1 out of {questions.length}</div>
 ) : (
  <>
     <div className='questions'>
     <div className='questions-count'>
        <span>Question {currentQuestion + 1}</span>/{questions.length}
     </div>
     <div className='question-text'>{questions[currentQuestion].questionText}</div>
     </div>
     <div className='answer-section'>
      {questions[currentQuestion].answerOption.map((answerOption) => (
          <button onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
      ))}
     </div>
  </>
 )}
 </div>
);
}


const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'aqua',
},
error: {
    color: "red",
    paddingVertical: 8
},

welcome: {
    fontSize: 16,
    paddingVertical: 15,
    lineHeight: 21,
    letterSpacing: 0.25,
},
text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
},

textinput: {
    fontSize: 20,
    width: 200,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairWidth,
    padding: 5,
    margin: 5
},
});

