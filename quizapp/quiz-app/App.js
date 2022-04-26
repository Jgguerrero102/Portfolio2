import { StatusBar } from 'expo-status-bar';
import { useCallback, useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import { Card, CheckBox } from 'react-native-elements';


let questions = [
  {
    title: "How many moons does the Earth have?",
    multipleAnswers: true,
    answers: [
      { correct: true, title: "1" },
      { correct: false, title: "2" },
      { correct: false, title: " 3" },
      { correct: false, title: "4" }
    ]
  },
  {
    title: "True or False: Gravity has less of an effect in space",
    multipleAnswers: true,
    answers: [
      { correct: false, title: "False" },
      { correct: true, title: "True" },
    ]
  },
  {
  title: "Mass x Gravity = ",
    multipleAnswers: true,
    answers: [
      { correct: true, title: "Weight" },
    ]
  },
]

export default function App() {
  let { score, setScore } = useState()
  let [answers, setAnswers] = useState([])
  let checkAnswers = useCallback((data, qAnswers) => {
    let answersCorrect = true
    for (let i = 0; i < data.answers.length; i++) {
      let qCorrect
      if (data.answers[i].correct) {
        qCorrect = qAnswers.includes(i)
      } else {
        qCorrect = !qAnswers.includes(i)
      }
      answersCorrect = answersCorrect && qCorrect
    }
    if (answersCorrect) {
      setScore(prevScore => {
        if (prevScore !== undefined) {
       return prevScore + 1
      } else {
        return 1
      }
      })
    } else {
      setScore(prevScore => prevScore === undefined ? 0 : prevScore)
    }
  }, [answers, score])
  return <>
    <View style={styles.container}>
      <Text>Quiz Application</Text>
      <FlatList data={questions} renderItem={({item, index}) => 
        <Question showAnswers={score !== undefined} data={item} key={index}
          setAnswers={
            (answers) => {
            setAnswers(prev => {
              prev[index] = answers
              return [...prev]
            })
          }}
      answer={answers[index]}
      ></Question>
      }></FlatList>
    <Button title="submit" onPress={
      () => questions.forEach((q,i) => checkAnswers(q, answers[i]))} 
      disabled={answers.length == 0} Submit></Button>
    {score !== undefined ? <Text>Score: {score} </Text> : undefined}
    <StatusBar style="auto" />
  </View>
  </>
}


const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
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

