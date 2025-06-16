import { useState } from "react";
// 컴포넌트
import quizData from "./data/quizData";
import Categoris from "./Components/Categoris";
import QuizPage from "./Components/QuizPage";
import Resurt from "./Components/Resurt";
import "./quiz.scss"

const App = () => {
  const [category,setCategory] = useState("");
  const [filterQuiz,setFilterQuiz] = useState([]);
  const [finished,setFinished] = useState(false);
  const [score,setScore] = useState(0);
  const onSelectCategory = (select)=>{
    setCategory(select);
    //
    const quizArr = quizData.quizzes.filter((data)=>{
      return data.category === select;
    });
    setFilterQuiz(quizArr);
  } 
  const handleFinish = (score) => {
    setFinished(true);
    setScore(score);
  }
    const handleRestart = () => {
    setCategory('');
    setFinished(false);
  }
  return (
    <div className="app">
      { !category && !finished && //참이면 실행
      <Categoris categoris={quizData.categories} 
                 onSelect={onSelectCategory} 
      />
      }
      {
      category && !finished && <QuizPage quiz={filterQuiz} onFinished={handleFinish}/> //보이고 안 보이고 처리
        }
        {
          finished && (<Resurt onRestart={handleRestart} appScore={score}/>)
        }
    </div>    
  );
};

export default App;