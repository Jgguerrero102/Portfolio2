import { StatusBar } from 'expo-status-bar';
import { useCallback, useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import { Card, CheckBox } from 'react-native-elements';


let questions = [
  {
    title: "Question Title",
    multipleAnswers: true,
    answers: [
      { correct: false, title: "Question 1" },
      { correct: true, title: "Question 2" },
      { correct: true, title: "Question 3" },
      { correct: true, title: "Question 4" }
    ]
  },
  {
    title: "Question Title 2",
    multipleAnswers: true,
    answers: [
      { correct: false, title: "Question A" },
      { correct: true, title: "Question B" },
      { correct: false, title: "Question C" },
      { correct: false, title: "Question D" }
    ]
  },
]

const styles = StyleSheet.create({
  incorrect: {
    textDecorationLine: "line-through",
    textDecorationStyle: "solid"
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


