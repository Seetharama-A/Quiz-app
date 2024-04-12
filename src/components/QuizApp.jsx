import React, { useState } from 'react';
import style from "./QuizApp.module.css"
import { Button } from '@mui/material';

const QuizApp = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      question: 'What does HTML stand for?',
      options: ['Hyper Text Markup Language', 'Hyperlinks and Text Markup Language', 'Home Tool Markup Language', 'Hyperlinks and Text Markup Leveler'],
      correctAnswer: 'Hyper Text Markup Language'
    },
    {
      question: 'Which built-in method returns the length of the string?',
      options: ['length()', 'size()', 'index()', 'None of the above'],
      correctAnswer: 'length()'
    },
    {
      question: 'What is the correct JavaScript syntax to print "Hello World"?',
      options: ['echo("Hello World")', 'print("Hello World")', 'console.log("Hello World")', 'printf("Hello World")'],
      correctAnswer: 'console.log("Hello World")'
    },
    {
      question: 'Inside which HTML element do we put the JavaScript?',
      options: ['<script>', '<javascript>', '<js>', '<scripting>'],
      correctAnswer: '<script>'
    },
    {
      question: 'How do you write "Hello World" in an alert box?',
      options: ['msgBox("Hello World")', 'alertBox("Hello World")', 'msg("Hello World")', 'alert("Hello World")'],
      correctAnswer: 'alert("Hello World")'
    },
    {
          question: 'What is JSX?',
          options: ['JavaScript XML', 'JavaScript Extension', 'Java XML', 'Java Extension'],
          correctAnswer: 'JavaScript XML'
        },
        {
          question: 'Which lifecycle method is invoked immediately after a component is inserted into the DOM?',
          options: ['componentDidMount()', 'componentWillUnmount()', 'componentWillMount()', 'componentDidUnmount()'],
          correctAnswer: 'componentDidMount()'
        },
        {
          question: 'What is used to pass data to a component from outside?',
          options: ['setState()', 'renderProps', 'props', 'PropTypes'],
          correctAnswer: 'props'
        },
        {
          question: 'In React, what is used to render multiple components?',
          options: ['ReactDOM.renderComponent()', 'ReactDOM.renderAll()', 'ReactDOM.renderMany()', 'ReactDOM.render()'],
          correctAnswer: 'ReactDOM.render()'
        },
        {
          question: 'What is the package name for React Router DOM?',
          options: ['react-router', 'react-router-native', 'react-router-dom', 'react-dom-router'],
          correctAnswer: 'react-router-dom'
        },
  ];

  const handleAnswerClick = (selectedOption) => {
    if (selectedOption === questions[questionIndex].correctAnswer) {
      setScore(score + 1);
    }
    handleSkipQuestion()
  };

  const handleSkipQuestion = () => {
    const nextQuestionIndex = questionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setQuestionIndex(nextQuestionIndex);
    } else {
      alert(`Quiz completed! Your score: ${score + 1} out of ${questions.length}`);
      setQuestionIndex(0);
      setScore(0);
    }
  };

  const handlePreviousQuestion = () => {
    const previousQuestionIndex = questionIndex - 1;
    if (previousQuestionIndex >= 0) {
      setQuestionIndex(previousQuestionIndex);
    }
  };

  const handleResetQuiz = () => {
    setQuestionIndex(0);
    setScore(0);
  };

  return (
    <div>
      <h1 id={style.H1}>Quiz App</h1>
      <div>
        <h2 id={style.H2}>Question Number - {questionIndex + 1} of {questions.length}</h2>
        <p id={style.question}>{questions[questionIndex].question}</p>
        <div id={style.options}>
          {questions[questionIndex].options.map((option, index) => (
            <button key={index} onClick={() => handleAnswerClick(option)}>{option}</button>
          ))}
        </div>
      </div>
      <div id={style.btn}>
        <Button variant="contained" onClick={handlePreviousQuestion} disabled={questionIndex===0}>Previous Question</Button>
        <Button variant="contained" onClick={handleResetQuiz}>Reset Quiz</Button>
        <Button variant="contained" onClick={handleSkipQuestion} disabled={questionIndex===questions.length-1}>Skip Question</Button>
      </div>
    </div>
  );
};

export default QuizApp;
