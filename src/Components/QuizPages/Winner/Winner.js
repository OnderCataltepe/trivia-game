import styles from "./Winner.module.css";
import lottie from "lottie-web";
import winner_animation from "../../../assets/winner.json";
import {useEffect, useRef, useContext} from "react";

import { ContextPages, Context } from "../../../ContextAndApi/Context/Context";
const Winner = ()=>{
    const { setPageShowing } = useContext(ContextPages);
    const { setPageBoolean } = useContext(Context);
    const aRef = useRef(null);

    const newGameHandler = ()=>{
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
            animationData: winner_animation
          });
        return () => lottie.destroy();
    }, []);
    
    return(
        <div className={styles.container}>
            <div className={styles.animation} ref={aRef}></div>
            <div className={styles.winner}>
                <h3>WINNER!</h3>
            </div>
            <div className={styles.buttonDiv}>
                <button onClick={newGameHandler}>New Game</button>
            </div>
        </div>
    )
}

export default Winner;