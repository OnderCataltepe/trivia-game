/* eslint-disable react/prop-types */
import { useEffect, useState, useContext } from "react";
import styles from "./Question.module.css";
import { ContextPages } from "../../../ContextAndApi/Context/Context";

//Components
import Header from "../Header/Header";
import Correct from "../Correct/Correct";
import Wrong from "../Wrong/Wrong";
import TimeIsUp from "../TimeIsUp/TimeIsUp";
import Winner from "../Winner/Winner";

const Question = ({ data }) => {
  const [questionArr] = useState(data.results);
  const [answers, setAnswers] = useState(null);
  const [question, setQuestion] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(0);
  const { pageShowing, setPageShowing } = useContext(ContextPages);

  //decode Base64 Encoding
  const decodeStr = (str) => {
    let decodedStr = window.atob(str);
    return decodedStr;
  };

  const sortingAnswers = (correct, wrong) => {
    const answerRandom = [];
    const randomNumber = Math.floor(Math.random() * wrong.length + 1);
    answerRandom.push(...wrong);
    answerRandom.splice(randomNumber, 0, correct);
    setAnswers(
      answerRandom.map((item) => {
        return decodeStr(item);
      })
    );
  };

  const answerHandler = (e) => {
    if (
      questionNumber < 9 &&
      e.target.innerText ===
        decodeStr(questionArr[questionNumber].correct_answer)
    ) {
      setPageShowing((prev) => {
        return { ...prev, correct: true };
      });
      setQuestionNumber((previous) => previous + 1);
    } else if (
      questionNumber === 9 &&
      e.target.innerText ===
        decodeStr(questionArr[questionNumber].correct_answer)
    ) {
      setPageShowing((prev) => {
        return { ...prev, winner: true };
      });
    } else if (
      e.target.innerText !==
      decodeStr(questionArr[questionNumber].correct_answer)
    ) {
      setPageShowing((prev) => {
        return { ...prev, wrong: true };
      });
    }
  };

  useEffect(() => {
    setQuestion(decodeStr(questionArr[questionNumber].question));
    sortingAnswers(
      questionArr[questionNumber].correct_answer,
      questionArr[questionNumber].incorrect_answers
    );
  }, [questionNumber]);

  if (pageShowing.correct) {
    return (
      <Correct
        setQuestionNumber={setQuestionNumber}
        questionNumber={questionNumber}
      />
    );
  }
  if (pageShowing.wrong) {
    return (
      <Wrong
        corAnswer={decodeStr(questionArr[questionNumber].correct_answer)}
        totalPoints={questionNumber * 100}
      />
    );
  }
  if (pageShowing.winner) {
    return <Winner />;
  }
  if (pageShowing.timeIsUp) {
    return (
      <TimeIsUp
        corAnswer={decodeStr(questionArr[questionNumber].correct_answer)}
        totalPoints={questionNumber * 100}
      />
    );
  }

  return (
    <div className={styles.container}>
      <Header questionNumber={questionNumber} />
      <div className={styles.questionContainer}>
        <div className={styles.questionDiv}>
          <p>{question && question}</p>
        </div>
        {answers && (
          <div className={styles.answerButtons}>
            <button onClick={answerHandler}>{answers[0]}</button>
            <button onClick={answerHandler}>{answers[1]}</button>
            <button onClick={answerHandler}>{answers[2]}</button>
            <button onClick={answerHandler}>{answers[3]}</button>
          </div>
        )}
      </div>
    </div>
  );
};
export default Question;

// politics, math easy
