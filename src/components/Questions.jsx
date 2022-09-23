import React from "react";
import Card from "./Card";
import FavoriteIcon from '@mui/icons-material/Favorite';
import "./Questions.css";

const Question = ({
  questionIndex,
  setQuestionIndex,
  questions,
  setShowQuestionsPage,
  setShowFinalPage,
  setShowStartingPage,
  score,
  setScore,
  health,
  setHealth,
  answers,
  setAnswers
}) => {
  const handleClick = (isCorrect, answerUser) => {

    const answer = questions[questionIndex].answers.find(obj => {
      return obj.correctAnswer === true
    }).answerText

    if (questionIndex < 9) {
      setAnswers(old => [...old, {
        question: questions[questionIndex].questionText,
        answer: answer,
        isCorrect: isCorrect,
        userAnswer: answerUser
      }])
      if (isCorrect) {
        setScore((score) => (score += 10))
      }
      else {
        setHealth((health) => (health -= 1));
      }
      setQuestionIndex((prevIndex) => prevIndex + 1);
      if (health === 0) {
        setShowQuestionsPage(false)
        setShowFinalPage(true)
      }
    } else {

      if (isCorrect) {
        setScore((score) => (score += 10))
      }
      setShowQuestionsPage(false)
      setShowFinalPage(true)
    }
  };

  return (
    <Card>
      <h1 className="question">{questions[questionIndex].questionText}</h1>

      <div className="answers">
        {questions[questionIndex].answers.map((answer, i) => (
          <div
            key={i}
            className="answer"
            onClick={() => {
              handleClick(answer.correctAnswer, questions[questionIndex].answers[i]);
            }}
          >
            <p>{answer.answerText}</p>
          </div>
        ))}
      </div>

      <p className="score">
        Skor: <span>{score}</span>
      </p>

      <p className="health"><FavoriteIcon style={{ fontSize: "medium", position: "relative", top: "2px" }} /> : <span style={{ color: "red" }}>{health}</span></p>

      <p className="question_number">
        Sual <span>{questionIndex + 1}</span>
      </p>
    </Card>
  );
};

export default Question;