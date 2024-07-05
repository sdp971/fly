import { useState } from 'react';
import quiz from '../services/quiz.js';
import Button from './Button.jsx';
import Explication from './Explication.jsx';



function Question() {
 
  const questions = quiz.questions

  console.log(questions[1 - 1].explication_vrai, "numero")
  
   const [displayComponent, setDisplayComponent] = useState(null);

   function handleClick  (questionId, answer)  {
     switch (answer) {
       case 'VRAI':
         setDisplayComponent( <Explication texte={questions[(`${questionId}`-1)].explication_vrai }/>);
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


 

  return (
    <div>
      {questions.map((question,index) => (
        <div key={index}>
          {/* <h1>{question.question}</h1> */}
{/* 
          <Button onclick={() => handleClick(question.id, 'VRAI')}>VRAI</Button>
          <Button onclick={() => handleClick(question.id, 'FAUX')}>FAUX</Button> */}

          {displayComponent}
        </div>
      ))}
    </div>
  );
}

export default Question;
