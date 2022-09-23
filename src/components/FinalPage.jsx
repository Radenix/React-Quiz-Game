import React, { useState } from "react";
import Card from "./Card";
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
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
        <div id="answers" style={{ position: "relative", top: "-40px", backgroundColor: "whitesmoke" }}>
          <div className="answer-titles" style={{ display: "flex", gap: "390px" }}>
            <h3>Sual:<hr /></h3>
            <h3 style={{ position: "absolute", left: "435px" }}>Sizin verdiyiniz cavab:</h3>
          </div>
          {answers.map(a => {
            return (

              <div key={a.question} style={{ display: "flex", gap: "236px" }}>

                <h4 style={{ width: "200px", display: "flex", flexDirection: "column", marginBottom: "5px" }}>{a.question}<hr /></h4>

                <h4 style={{ alignItems: 'center', display: 'flex' }}><span style={{ marginRight: '5px', marginBottom: '5px' }}>{a.userAnswer.answerText}</span>{a.isCorrect ? <CheckIcon style={{ color: "green" }} /> : <ClearIcon style={{ color: "red" }} />}</h4>
              </div>
            )
          })}

        </div>
      }

      <button className="play_again_btn" onClick={handleClick} style={{ position: "relative", top: "-29px" }}>
        Yenidən Oyna
      </button>
    </Card>
  );
};

export default FinalPage;