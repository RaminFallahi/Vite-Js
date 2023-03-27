import { useState, useEffect } from "react";

export default function TriviaDatabase() {
  const [question, setQuestion] = useState(null);
  const [category, setCategory] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    const getQuestion = async () => {
      let response = await fetch("https://opentdb.com/api.php?amount=1&type=boolean");
      let data = await response.json();
      console.log(data);
      setCategory(data.results[0].category);
      setQuestion(data.results[0].question);
      setAnswer(data.results[0].correct_answer);
    };
    getQuestion();
  }, []);

// button function
function handleButton() {
  setReveal(true);
}

//conditional rendering
  let revealAnswer = <div></div>;
  if (reveal) {
    revealAnswer = <div>{answer}</div>;
  }

  return (
    <div id="trivia-question">
      <div>{question}</div>
      <div>{category}</div>
      <button onClick={handleButton}>show Answer</button>
      {revealAnswer}
    </div>
  );
};