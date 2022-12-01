import React, {useState, useEffect} from 'react';
import './App.css';
import BoardComponents from './components/BoardComponents'
import {Board} from "./models/Board"

function App() {

  const [board, setBoard] = useState(new Board())

  useEffect(()=>{
    restart() 
  }, [])

  function restart() {
    const newBoard = new Board();
    //отрисовываем доску
    newBoard.initCells()
    //расставляем фигуры
    newBoard.addFigures()
    //сохраняем состояние доски
    setBoard(newBoard)
  }

  return (
    <div className="App">
      <BoardComponents
      board ={board}
      setBoard={setBoard}
      
      />

    </div>
  );
}

export default App;
