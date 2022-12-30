import { useEffect, useState } from "react";
import "../app.css";
import useSound from "use-sound";
import play from "../sounds/play.mp3";
import correct from "../sounds/correct.mp3";
import wrong from "../sounds/wrong.mp3";
export default function Trivia({
  data,
  setTimeOut,
  questionNumber,
  setQuestionNumber,
}) {
  const [Question, setQuestion] = useState(null);
  const [SelectedAnswer, setSelectedAnswer] = useState(null);
  const [ClassName, setClassName] = useState("answer");
  const [letsPlay] = useSound(play);
  const [correctAnswer] = useSound(correct);
  const [wrongAnswer] = useSound(wrong);

  useEffect(() => {
    letsPlay();
  }, [letsPlay]);

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };
  const handleClick = (e) => {
    setSelectedAnswer(e);
    setClassName("answer active");
    delay(3000, () =>
      setClassName(e.correct ? "answer correct" : "answer wrong")
    );
    delay(6000, () => {
      if (e.correct) {
        correctAnswer();
        delay(1000, () => {
          setQuestionNumber((prev) => prev + 1);
          setSelectedAnswer(null);
        });
      } else {
        wrongAnswer();
        delay(1000, () => {
          setTimeOut(true);
        });
      }
    });
  };
  return (
    <>
      <div className="trivia">
        <div className="question">{Question?.question}</div>
        <div className="answers">
          {Question?.answers.map((a) => (
            <div
              className={SelectedAnswer === a ? ClassName : "answer"}
              onClick={() => handleClick(a)}
            >
              {a.text}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
