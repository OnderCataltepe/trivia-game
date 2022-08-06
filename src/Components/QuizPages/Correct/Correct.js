/* eslint-disable react/prop-types */
import styles from "./Correct.module.css";
import lottie from "lottie-web";
import { ContextPages } from "../../../ContextAndApi/Context/Context";
import correct_animation from "../../../assets/correct.json";
import { useEffect, useContext, useRef } from "react";
const Correct = ({ questionNumber }) => {
  const animRef = useRef(null);
  const { setPageShowing } = useContext(ContextPages);
  const nextHandler = () => {
    setPageShowing((previous) => {
      return { ...previous, correct: false };
    });
  };

  useEffect(() => {
    lottie.loadAnimation({
      container: animRef.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: correct_animation,
    });
    return () => lottie.destroy();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.titleDiv}>
        <h3>Correct !</h3>
      </div>
      <div className={styles.animation} ref={animRef}></div>
      <div className={styles.pointsDiv}>
        <p>TOTAL POINTS:</p>
        <p>{questionNumber * 100}</p>
      </div>
      <div className={styles.buttonDiv}>
        <button onClick={nextHandler}>Next Question</button>
      </div>
    </div>
  );
};

export default Correct;
