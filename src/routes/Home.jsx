import TriviaDatabase from "../components/Trivia-Database";

export default function Home() {
  return (
    <main id="main">
      <h1>Welcome To Trivia</h1>
      <p>Here's your random question:</p>
      <TriviaDatabase />
    </main>
  );
} 