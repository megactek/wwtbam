import { useEffect, useState } from "react";

function Timer({ setTimeOut, questionNumber }) {
  const [Timer, setTimer] = useState(30);
  useEffect(() => {
    if (Timer === 0) return setTimeOut(true);
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [setTimeOut, Timer]);
  useEffect(() => {
    setTimer(30);
  }, [questionNumber, setTimeOut]);
  return Timer;
}

export default Timer;
