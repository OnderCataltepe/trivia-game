import styles from "./TimeIsUp.module.css";
import lottie from "lottie-web";
import time_animation from "../../../assets/timeIsUp.json";
import { ContextPages, Context } from "../../../ContextAndApi/Context/Context";
import {useEffect, useRef, useContext} from "react";

const TimeIsUp = ({corAnswer, totalPoints})=>{
    const { setPageShowing } = useContext(ContextPages);
    const { setPageBoolean } = useContext(Context);
    const aRef = useRef(null);
    
    const reTryHandler = ()=>{
        setPageShowing({
            correct: false,
            wrong: false,
            timeIsUp: false,
            winner: false,
            question: true
        });
        setPageBoolean({
            welcomePage: true,
            categoryPage: false,
            difficultyPage: false,
            quizPages: false
        });
    };

    useEffect(() => {
        lottie.loadAnimation({
            container: aRef.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: time_animation
          });
        return () => lottie.destroy();
    }, []);
    
    return(
        <div className={styles.container}>
            <div className={styles.animation} ref={aRef}></div>
            <div className={styles.pointsDiv}>
                <p>Total Points:</p>
                <p>{totalPoints}</p>
            </div>
            <div className={styles.answerDiv}>
                <p>Correct Answer Is:</p>
                <p>{corAnswer}</p>          
            </div>
            <div className={styles.buttonDiv}>
                <button onClick={reTryHandler}>Try Again</button>
            </div>
        </div>
    )
}

export default TimeIsUp;