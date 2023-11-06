import React from 'react';
import { useContext } from 'react';
import { QuizContext } from '../context/quiz';
import welldone from "../img/welldone.svg"
import "./GameOver.css"

const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  return (
    <div id='gameOver' >
        <h2>Fim do Jogo!</h2>
        <p>Pontuação: {quizState.score} </p>
        <p>Você acertou {quizState.score} de {quizState.questions.length} questões</p>
        <img src={welldone} alt="fim do quiz" />
        <button onClick={() => dispatch({type: "NEW_GAME"})} >Reiniciar</button>
    </div>
  )
}

export default GameOver