import Explication from '../components/Explication';
import Logo from '../components/Logo';
// import Question from '../components/Question';
import Question2 from '../components/Question2.jsx';
import quiz from '../services/quiz.js';
import Button from '../components/Button.jsx';
import { useEffect, useRef, useState } from 'react';
import './Quizz.css';


function Quiz() {
  const questions = quiz.questions;
  const [showExplanation, setShowExplanation] = useState(false);
  const [displayComponent, setDisplayComponent] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const questionContainerRef = useRef(null);

  console.log(questions[currentQuestion].question, 'question display');
  console.log(questions[currentQuestion].answers[1].explanation.text);

  console.log(showExplanation, 'quiz');

  function handleClick(answer_id, answer) {
    console.log(answer_id, 'id');
    if (!selectedAnswer) {
   setDisabled(true);
}
    setSelectedAnswer(answer);
    // setSelectedButton(answer_id);
    setShowExplanation(true);
    setDisplayComponent(
      <Explication
        texte={
          questions[currentQuestion].answers[answer_id - 1].explanation.text
        }
        setShowExplanation={setShowExplanation}
      />
    );
    
  }

  useEffect(() => {
    console.log(disabled,"disabled");

   },[disabled])

  function handleNext() {
    setDisplayComponent(null);
    setDisabled(false);
    setSelectedAnswer(false);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  }

 
  // quand une réponse est cliquée, les questions qui n'ont pas été cliquées doivent être disable

  return (
    <div className='Quizz'>
      <Logo />

      <div className='question-container' ref={questionContainerRef}>
        <Question2 question={questions[currentQuestion].question} />

        {questions[currentQuestion].answers.map((answer, index) => (
          <div className='answer-container' key={index}>
            <Button
              onclick={() => handleClick(answer.id, answer.text)}
              style={{
                borderColor: selectedAnswer === answer.text ? 'green' : ' ',
              }}
              disabled={disabled}
            >
              {answer.text}
            </Button>
          </div>
        ))}

        {displayComponent}
        <div className='btn-next'>
          <Button onclick={handleNext}>SUIVANT</Button>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
