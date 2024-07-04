import Explication from "../components/Explication";
import Logo from "../components/Logo";
// import Question from '../components/Question';
import { useEffect, useRef, useState } from "react";
import Button from "../components/Button.jsx";
import Question2 from "../components/Question2.jsx";
import quiz from "../services/quiz.js";
import "./Quizz.css";

function Quiz() {
  const questions = quiz.questions;
  const [showExplanation, setShowExplanation] = useState(false);
  const [displayComponent, setDisplayComponent] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const questionContainerRef = useRef(null);

  console.log(questions[currentQuestion].question, "question display");
  console.log(questions[currentQuestion].answers[1].explanation.text);

  console.log(showExplanation, "quiz");

  function handleClick(answer_id, answer) {
    console.log(answer_id, "id");
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
        onclick={handleNext}
      />
    );
  }

  useEffect(() => {
    console.log(disabled, "disabled");
  }, [disabled]);

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
    <div className="Quizz">
      <Logo />

      <div className="main-question-container">
        <div className="context-container" ref={questionContainerRef}>
          <p className="text-context">Contexte de la question</p>
        </div>
        <div className="question-container">
          <Question2 question={questions[currentQuestion].question} />
        </div>
      </div>

      <div className="main-answer-container">
        {questions[currentQuestion].answers.map((answer, index) => (
          <div key={index}>
            <Button
              onclick={() => handleClick(answer.id, answer.text)}
              style={{
                backgroundColor:
                  selectedAnswer === answer.text ? "lightgreen" : "#FFEEB6 ",
                width: "80%",
                border: "2px solid black",
                color: "#6A5AE0",
                borderRadius: "20px",
                height: "3rem",
                fontSize: "20px",
                gap: "20px",
              }}
              disabled={disabled}
            >
              {answer.text}
            </Button>
          </div>
        ))}

        {displayComponent}
      </div>
    </div>
  );
}

export default Quiz;
