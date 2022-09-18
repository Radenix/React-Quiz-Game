import React from "react";
import Card from "./Card";

import "./StartingPage.css";

const StartingPage = ({
  setShowStartingPage,
  setShowQuestionsPage,
  topScore,
  username,
  setUsername,
}) => {
  const startGame = () => {
    if (username.trim().length > 0) {
      setShowStartingPage(false);
      setShowQuestionsPage(true);
    }
  };

  return (
    <Card>
      <h1 className="header">Sual-Cavab oyununa xoş gəldiniz</h1>
      <h3 className="primary_text">Zəhmət olmasa istifadəçi adınızı daxil edin.</h3>
      <input
        type="text"
        placeholder="İstifadəçi adı"
        className="username_input"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <button className="start_btn" onClick={startGame}>
        Başla
      </button>

      <p className="top_score">
        Toplam skor: <span>{topScore}</span>
      </p>
    </Card>
  );
};

export default StartingPage;