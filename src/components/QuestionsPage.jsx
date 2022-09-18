import React from "react";
import { useState } from "react";
import Question from "./Questions";

import { questions } from "../questions";

const QuestionsPage = ({
  setShowPages,
  score,
  setScore,
  health,
  setHealth,
  setShowQuestionsPage,
  setShowFinalPage,
}) => {
  const [questionIndex, setQuestionIndex] = useState(0);

  return (
    <>
      <Question
        questionIndex={questionIndex}
        questions={questions}
        setQuestionIndex={setQuestionIndex}
        setShowQuestionsPage={setShowQuestionsPage}
        setShowFinalPage={setShowFinalPage}
        score={score}
        setScore={setScore}
        health={health}
        setHealth={setHealth}
      />
    </>
  );
};

export default QuestionsPage;