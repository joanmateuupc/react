import { useState } from 'react'
import './App.css'
import confetti from "canvas-confetti"

import {Square} from "./components/Square.jsx"
import { TURNS } from "./constants.js"
import { checkWinner, checkEndGame   } from './logic/board.js'

import { Winner } from './components/Winner.jsx'


function App() {
  //const [board,setBoard] = useState(Array(9).fill(null))
  const [board,setBoard] = useState(() => {
    const boardFromStage = window.localStorage.getItem('board')
    return boardFromStage ? JSON.parse(boardFromStage) : Array(9).fill(null)
  })


  //const [turn, setTurn] = useState(TURNS.X)
  const [turn, setTurn] = useState(() => {
    const turnLocalStorage = window.localStorage.getItem('turn')
    return turnLocalStorage ?? TURNS.X
  })
  const[winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')

  }

  
  const updateBoard = (index) => {
    // si intentas escribir encima de algo que ya tiene algo que no te deje
    if (board[index] || winner) return
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    //guardar aquí partida

    window.localStorage.setItem('board',JSON.stringify(newBoard))
    window.localStorage.setItem('turn',newTurn)

    const newWinner = checkWinner(newBoard)
    if (newWinner){
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)){
      setWinner(false)
    }
  }

  return (
    <main className='board'> 
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Reset del juego</button>
      <section className='game'>
        {
         board.map((_, index)=>{
            return (
              <Square 
                key={index}
                index={index}
                updateBoard={updateBoard}
                >
                  {board[index]}
                </Square>
            )

         })
        }

      </section>

      <section className='turn'>
        <Square isSelected={turn==TURNS.X}> {TURNS.X} </Square>
        <Square isSelected={turn==TURNS.O}> {TURNS.O} </Square>
      </section>
        
      
        <Winner winner = {winner} resetGame = {resetGame}/>
      

    </main>
  )
}

export default App



