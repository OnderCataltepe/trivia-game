import styles from "./QuizPages.module.css";
import { useEffect, useContext } from "react";
import { Context } from "../../ContextAndApi/Context/Context";
import {useFetch} from "../../ContextAndApi/Fetch/Fetch";
import Question from "./Questions/Question";

const QuizPages = ()=>{
    const { questionType } = useContext(Context);
    const {data,error,isLoading, getFetch} = useFetch();
    
    useEffect(()=>{
        getFetch(`https://opentdb.com/api.php?amount=10&category=${questionType.category}&difficulty=${questionType.difficulty}&type=multiple&encode=base64`);
    },[]);

return(
    <div className={styles.container}>
        {error && <h2>Error: {error}</h2> }
        {isLoading && <h1>Loading...</h1>}
        {data && <Question data={data} />}
    </div>
    )
};

export default QuizPages;