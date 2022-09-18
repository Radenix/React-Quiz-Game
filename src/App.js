import { useState } from "react";
import FinalPage from "./components/FinalPage";
import QuestionsPage from "./components/QuestionsPage";
import StartingPage from "./components/StartingPage";
import HomePage from './pages/home';
function App() {
  const [username, setUsername] = useState("");

  const [score, setScore] = useState(0);
  const [topScore, setTopScore] = useState(0);
  const [health, setHealth] = useState(3);

  const [showHomePage, setShowHomePage] = useState(true)
  const [showStartingPage, setShowStartingPage] = useState(false);
  const [showQuestionsPage, setShowQuestionsPage] = useState(false);
  const [showFinalPage, setShowFinalPage] = useState(false);

  return (
    <>
    {showHomePage && (
      <HomePage
        setShowHomePage={setShowHomePage}
        setShowStartingPage={setShowStartingPage}
        health={health}
        setHealth={setHealth}
      />
    )}
      {showStartingPage && (
        <StartingPage
          setShowStartingPage={setShowStartingPage}
          setShowQuestionsPage={setShowQuestionsPage}
          topScore={topScore}
          username={username}
          setUsername={setUsername}
          health={health}
          setHealth={setHealth}
        />
      )}
      {showQuestionsPage && (
        <QuestionsPage
          score={score}
          setScore={setScore}
          health={health}
          setHealth={setHealth}
          setShowQuestionsPage={setShowQuestionsPage}
          setShowFinalPage={setShowFinalPage}
        />
      )}
      {showFinalPage && (
        <FinalPage
          score={score}
          topScore={topScore}
          health={health}
          setHealth={setHealth}
          setTopScore={setTopScore}
          setShowHomePage={setShowHomePage}
          setShowFinalPage={setShowFinalPage}
          setScore={setScore}
          username={username}
          setUsername={setUsername}
        />
      )}
    </>
  );
}

export default App;
