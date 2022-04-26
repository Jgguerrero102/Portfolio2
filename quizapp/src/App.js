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