  import { WINNER_COMBOS } from "../constants.js"

  export const checkWinner = (boardTable) => {
    // revisamos todas las combinaciones ganadoras para ver si x o u ganó
    for (const combo of WINNER_COMBOS){
      const [a,b,c] = combo
      if (boardTable[a] && boardTable[a] === boardTable[b] && boardTable[a] === boardTable[c]){
        return boardTable[a] // nos devuelve x o u
      }
    }
    return null
  }

  export const checkEndGame = (boardTable) => {
    return boardTable.every((square) => square !== null)
  }