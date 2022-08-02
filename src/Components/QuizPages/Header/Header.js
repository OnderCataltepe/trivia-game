import { useEffect, useRef, useState, useContext } from "react";
import styles from "./Header.module.css";
import { ContextPages } from "../../../ContextAndApi/Context/Context";

const Header = ({questionNumber})=>{
    const timerRef = useRef(null);
    const { setPageShowing } = useContext(ContextPages);
    const [time,setTime] = useState(15);
    
    useEffect(()=>{
        timerRef.current = setInterval(()=>{
            setTime((prev)=> prev-1 );  
        },1000);
        return ()=> clearInterval(timerRef.current);
    },[]);

    useEffect(()=>{
        if(time == 0){
            setPageShowing({
                correct: false,
                wrong: false,
                timeIsUp: true,
                winner: false,
                question: true
            });
        };
    },[time]);


    return(
        <div className={styles.container}>
            <div className={styles.questionDiv}>
                <p>Question:  {questionNumber+1} / 10</p>
            </div>
            <div className={styles.pointsDiv}>
                <p>{questionNumber *100}</p>
                <p>Points</p>
            </div>
            <div className={styles.timeDiv}>
                <p>Remaining Time: <span>{time}</span></p>
            </div>
        </div>
    )
}
export default Header;