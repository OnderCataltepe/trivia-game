import { useContext } from "react";
import styles from "./DifficultyPage.module.css";

import { Context } from "../../ContextAndApi/Context/Context";
const DifficultyPage = () =>{
    const { setPageBoolean } = useContext(Context);
    const { setQuestionType } = useContext(Context);
    
    const nextStep = (diffic)=>{
        setQuestionType((prev)=>{return {...prev, difficulty: diffic}});
        setPageBoolean(
            {
                welcomePage: false,
                categoryPage: false,
                difficultyPage: false,
                quizPages: true
            }
        );
    };
    
    return(
        <div className={styles.container}>
            <div className={styles.titleDiv}>
                <h3>Select Difficulty</h3>
            </div>
            <div className={styles.containerButton}>
                <button onClick={()=>nextStep("easy")}>EASY</button>
                <button onClick={()=>nextStep("medium")}>MEDIUM</button>
                <button onClick={()=>nextStep("hard")}>HARD</button>
            </div>
        </div>
    )
};

export default DifficultyPage;