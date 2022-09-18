import React from "react";
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
  setHealth
}) => {
  const handleClick = () => {
    if (score > topScore) {
      setTopScore(score);
    }

    setShowFinalPage(false);
    setShowHomePage(true);
    setHealth(3);
    setScore(0);
    setUsername("");
  };

  return (
    <Card>
      <h1 className="heading">Siz oyunun sonuna catdiniz, {username}!</h1>

      <h3 className="primary_text">Skorunuz:</h3>

      <h3 className="final_score">{score}</h3>

      <button className="see_questinos">Suallara baxış</button>

      <button className="play_again_btn" onClick={handleClick}>
        Yenidən Oyna
      </button>
    </Card>
  );
};

export default FinalPage;