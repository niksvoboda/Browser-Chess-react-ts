import React, { FC, useEffect, useState } from "react";
import {Board} from "../models/Board";
import { Cell } from "../models/Cell";
import CellComponent from "./CellComponent";

interface BoardProps {
    board:Board;
    setBoard: (board: Board) => void
}


const BoardComponents: FC<BoardProps> = ({board, setBoard}) =>{
    //Связываем состояние "выбранной" игроком ячейки
    const  [selectedCell, setSelectedCell] = useState <Cell | null> (null)

    //колбэк для подсвечивания выбранного поля с фигурой
    const clickFigure  = (cell: Cell) =>{
        // Если есть выбранная ячейка на которой стоит фигура и эта ячейка не равняется той
        // на которую мы хотим нажать и при этому метод canMove возвращает нам true 
        // для этой ячейки то передвигаем фигуру
        if(selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)){
            //передвигаем фигуру
            selectedCell.moveFigure(cell)
            //обнуляем выбранную ячейку
            setSelectedCell(null)
            updateBoard()
        }  else {
             //если нет выбранной ячейки и  в ячейке есть фигура 
             //тогда подсвечиваем при клике
            setSelectedCell(cell)
        }
       
       
        
    } 
    //Перерисовываем доску для подсветки возможных ходов при каждой новой выбранной фигуре
    useEffect(()=>{
        highLightCells()
    },[selectedCell])

    const highLightCells = () => {
        board.highLightCells(selectedCell)
    }
    const updateBoard = () => {
        const newBoard = board.getCopyBoard()
        setBoard(newBoard)
    }

   
   
    return(
        //отрисовываем доску, ячейки, фигуры и выделенное поле
        <div className="board">
            {board.cells.map(
                (row: Cell[], index: number) =>
                <React.Fragment key={index}>
                        {row.map((cell: any) =>
                        <CellComponent
                        clickFigure = {clickFigure}
                        cell={cell}
                        selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
                        key={cell.id}
                        
                        />
                        )}
                </React.Fragment>
            )}
          
          
           
</div>

    )
}

export default BoardComponents;