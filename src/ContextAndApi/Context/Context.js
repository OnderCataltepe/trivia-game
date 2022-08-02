import { createContext, useState } from "react";

export const Context = createContext();
export const ContextPages = createContext();

export const ContextProvider = ({children})=>{
    const [questionType, setQuestionType] = useState({category:"", difficulty:""})
    const[pageBoolean, setPageBoolean] = useState({
        welcomePage: true,
        categoryPage: false,
        difficultyPage: false,
        quizPages: false
    });

    return(
        <Context.Provider value={{questionType, setQuestionType, pageBoolean, setPageBoolean}}>
            {children}
        </Context.Provider>
    )
};

export const ContextPagesProvider = ({children})=>{
    const [pageShowing, setPageShowing] = useState({
        correct: false,
        wrong: false,
        timeIsUp: false,
        winner: false,
        question: true
    });

    return (
        <ContextPages.Provider value={{pageShowing, setPageShowing}}>
            {children}
        </ContextPages.Provider>

    )
};