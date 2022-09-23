import React, { useState } from "react";
import Card from "./Card";

import "./FinalPage.css";

const FinalPage = ({
  score,
  setShowFinalPage,
  setShowHomePage,
  topScore,
  setTopScore,
  setScore,
  username,
  setUsername,
  setHealth,
  answers,
  setAnswers
}) => {
  const [answersShowen, setAnswersShowen] = useState(false)
  const handleClick = () => {
    if (score > topScore) {
      setTopScore(score);
    }
    setAnswersShowen(false)
    setAnswers([])
    setShowFinalPage(false);
    setShowHomePage(true);
    setHealth(3);
    setScore(0);
    setUsername("");
  };


  const revealAnswers = () => {
    setAnswersShowen(true)
  }
  console.log("answers: " + JSON.stringify(answers));

  return (
    <Card>
      <h1 className="hheading">Siz oyunun sonuna catdiniz, {username}!</h1>

      <h3 className="pprimary_text">Skorunuz:</h3>

      <h3 className="ffinal_score">{score}</h3>

      <button className="see_questions" onClick={revealAnswers}>Cavablara Bax</button>

      {answersShowen &&
        <div id="answers" style={{position:"relative",top:"-40px"}}>
          {answers.map(a => {
            return (
              <div key={a.question}>
                <h4>Sual: {a.question}</h4>
                <h4>Doğru Cavab: {a.answer}</h4>
                <h4>Sizin verdiyiniz cavab: {a.userAnswer.answerText}</h4>
              </div>
            )
          })}

        </div>
      }

      <button className="play_again_btn" onClick={handleClick} style={{position:"relative", top:"-29px"}}>
        Yenidən Oyna
      </button>
    </Card>
  );
};

export default FinalPage;