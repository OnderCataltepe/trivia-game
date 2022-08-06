import styles from "./CategoryPage.module.css";
import { useContext } from "react";

import { Context } from "../../ContextAndApi/Context/Context";
const CategoryPage = () => {
  const { setPageBoolean } = useContext(Context);
  const { setQuestionType } = useContext(Context);

  const nextStep = (categoryNumber) => {
    setPageBoolean({
      welcomePage: false,
      categoryPage: false,
      difficultyPage: true,
      quizPages: false,
    });
    setQuestionType({ category: categoryNumber, difficulty: "" });
  };

  return (
    <div className={styles.container}>
      <div className={styles.titleDiv}>
        <h3>Choose a Category</h3>
      </div>
      <div className={styles.containerButton}>
        <button onClick={() => nextStep(9)}>General Knowledge</button>
        <button onClick={() => nextStep(21)}>Sports</button>
        <button onClick={() => nextStep(20)}>Mythology</button>
        <button onClick={() => nextStep(23)}>History</button>
        <button onClick={() => nextStep(18)}>Science (Computers)</button>
        <button onClick={() => nextStep(12)}>Music</button>
      </div>
    </div>
  );
};

export default CategoryPage;
