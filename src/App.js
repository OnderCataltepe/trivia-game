import './App.css';
import { Context } from './ContextAndApi/Context/Context';
import { useContext } from 'react';
import WelcomePage from './Components/WelcomePage/WelcomePage';
import CategoryPage from "./Components/Category/CategoryPage";
import DifficultyPage from './Components/Difficulty/DifficultyPage';
import QuizPages from './Components/QuizPages/QuizPages';

function App() {
  const {pageBoolean, setPageBoolean} = useContext(Context);
 
  return(  
    <div className="App">
      { pageBoolean.welcomePage && <WelcomePage/>}
      { pageBoolean.categoryPage && <CategoryPage/>}
      { pageBoolean.difficultyPage && <DifficultyPage/>}
      { pageBoolean.quizPages && <QuizPages />}
    </div>
  );
};

export default App;
