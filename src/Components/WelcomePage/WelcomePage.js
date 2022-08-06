import styles from "./WelcomePage.module.css";
import { useRef, useEffect, useContext } from "react";

import { Context } from "../../ContextAndApi/Context/Context";
import lottie from "lottie-web";
import start_animation from "../../assets/girl-thinking.json";
const WelcomePage = () => {
  const animationRef = useRef(null);
  const { setPageBoolean } = useContext(Context);
  const startHandler = () => {
    setPageBoolean({
      welcomePage: false,
      categoryPage: true,
      difficultyPage: false,
      quizPages: false,
    });
  };

  useEffect(() => {
    lottie.loadAnimation({
      container: animationRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: start_animation,
    });
    return () => lottie.destroy();
  }, []);

  return (
    <div className={styles.container}>
      <div ref={animationRef} className={styles.animationDiv}></div>
      <h5>A TRIVIA GAME</h5>
      <button onClick={startHandler}>
        PLAY THE GAME <span></span>
      </button>
    </div>
  );
};

export default WelcomePage;
