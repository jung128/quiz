import { useState } from "react";

const QuizPage = ({ quiz,onFinished }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score,setScore] = useState(0);
  const curruntQuiz = quiz[currentIdx];
  const handleClick = (item) => {
    // if(item === curruntQuiz.correct ){
    //   setScore( score+10);
    // }
    const result = (item===curruntQuiz.correct) ? score+10:score;
    setCurrentIdx(currentIdx + 1);
    setScore(result);
    if( currentIdx+1 < quiz.length){
      //계속 실행
    } else {
      //문제 끝
      // console.log("end")
      onFinished(result);
    }
  };
  // props를 {quiz}로 받기
  return (
    <div className="quiz-page">
      <h2>퀴즈({currentIdx+1}/{quiz.length})</h2>
      <p>{curruntQuiz.question}</p>
      <div className="choices">
        {curruntQuiz.choices.map((item, idx) => {
          return <button key={idx}onClick={()=>{handleClick(item)}}>{item}</button>;
        })}
        
      </div>
      <h3>점수 : {score}</h3>
    </div>
  );
};

export default QuizPage;
