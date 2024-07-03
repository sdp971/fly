import Explication from '../components/Explication';
import Logo from '../components/Logo';
// import Question from '../components/Question';
import Question2 from '../components/Question2.jsx';
import quiz from '../services/quiz.js';
import Button from '../components/Button.jsx';
import { useRef, useState } from 'react';
import './Quizz.css';

function Quiz() {
  const questions = quiz.questions;

  const [displayComponent, setDisplayComponent] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questionContainerRef = useRef(null);

  console.log(questions[currentQuestion].question, 'question display');

  function handleClick(questionId, answer) {
    console.log(questionId, 'id');
    switch (answer) {
      case 'VRAI':
        setDisplayComponent(
          <Explication
            texte={questions[`${questionId}` - 1].explication_vrai}
          />
        );
        break;
      case 'FAUX':
        setDisplayComponent(
          <Explication
            texte={questions[`${questionId}` - 1].explication_faux}
          />
        );
        break;
      default:
        setDisplayComponent(null);
    }
  }

  function handleNext() {
    setDisplayComponent(null);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  }

  return (
    <div className='Quizz'>
      <Logo />

      <div className='question-container' ref={questionContainerRef}>
        <Question2 question={questions[currentQuestion].question} />

        <div className='answer-container'>
          <Button
            onclick={() => handleClick(questions[currentQuestion].id, 'VRAI')}
          >
            VRAI
          </Button>
          <Button
            onclick={() => handleClick(questions[currentQuestion].id, 'FAUX')}
          >
            FAUX
          </Button>
        </div>

        {displayComponent}
        <div className='btn-next'>
          <Button onclick={handleNext}>SUIVANT</Button>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
