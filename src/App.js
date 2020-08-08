import React, { useState,useReducer } from "react";
import "./App.css";
import Progress from "./components/Progress";
import Question from "./components/Question";
import Answers from "./components/Answers";

import {SET_ANSWERS,SET_CURRENT_ANSWER,SET_CURRENT_QUESTION,SET_ERROR,SET_SHOW_RESULTS,RESET_QUIZ} from './reducers/types'




import quizReducer from './reducers/QuizReducer'


function App() {

  const initialState = {
    currentQuestion: 0,
    currentAnswer: "",
    answers: [],
    showResults: false,
    error:"",
  }
  // const [currentQuestion, SetCurrentQuestion] = useState(0);
  // const [currentAnswer, setCurrentAnswer] = useState("");
  // const [answers, setAnswers] = useState([]);
  // const [showResults, setShowResults] = useState(false)
  // const [error, setError] = useState("");




const [state, dispatch] = useReducer(quizReducer, initialState)
const {currentQuestion, currentAnswer, answers,showResults,error} = state;




  const questions = [
    {
      id: 1,
      question: "Como se llama el perro de tintín",
      answer_a: "Milú",
      answer_b: "Coco",
      answer_c: "Rintintín",
      answer_d: "boby",
      correct_answer: "a"
    },

    {
      id: 2,
      question: "Which statement about Hooks is not true?",
      answer_a: "Hooks arer still in beta and not availoable yet",
      answer_b: "Hooks arer still in beta and not availoable yet",
      answer_c: "Hooks arer still in beta and not availoable yet",
      answer_d: "Hooks arer still in beta and not availoable yet",
      correct_answer: "a"
    },

    {
      id: 3,
      question: "Which statement about Hooks is not true?",
      answer_a: "Hooks arer still in beta and not availoable yet",
      answer_b: "Hooks arer still in beta and not availoable yet",
      answer_c: "Hooks arer still in beta and not availoable yet",
      answer_d: "Hooks arer still in beta and not availoable yet",
      correct_answer: "a"
    }
  ];

  const question = questions[currentQuestion];



  const renderError = () => {
    if (!error) {
      return;
    }

    return <div className="error">{error}</div>;
  };


const renderResultsMark = (question,answer)=>{


  if(question.correct_answer === answer.answer){
return <span className ="correct">Correct</span>

  }
  return <span className="failed">Failed</span>
}



  const renderResults = ()=>{


return answers.map(answer => {

  const question = questions.find(
    question => question.id === answer.questionId
  );

  return <div key = {question.id}>{question.question} - {renderResultsMark(question,answer)}</div>
})

  }


  const restart = () => {


    dispatch({type: RESET_QUIZ})

    }



  const next = () => {
    const answer = { questionId: question.id, answer: currentAnswer };

    if (!currentAnswer) {
      dispatch({type: SET_ERROR , ERROR: 'Please select an option'})

      return;
    }
    answers.push(answer);

    dispatch({type: SET_ANSWERS , answers})

    dispatch({type: SET_CURRENT_ANSWER, currentAnswer:''})

    if (currentQuestion + 1 < questions.length) {
      dispatch({type: SET_CURRENT_QUESTION, currentQuestion: currentQuestion + 1})
      return;
    }
    dispatch({type: SET_SHOW_RESULTS , showResults:true})

  };



  if(showResults){

return(
  <div className="container results">

    <h2>Results</h2>
         <ul>{renderResults()}</ul>
    <button onClick={restart} className="btn btn-primary">
        Restart
      </button>
  </div>
)
  }else {


  

  return (
    <div className="container">
      <Progress
        total={questions.length}
        currentQuestion={currentQuestion + 1}
      />
      <Question question={question.question} />

      {renderError()}
      <Answers
        question={question}
        currentAnswer={currentAnswer}
        dispatch={dispatch}
      />
      <button onClick={next} className="btn btn-primary">
        Confirm and Continue
      </button>
    </div>
  );
}}

export default App;
