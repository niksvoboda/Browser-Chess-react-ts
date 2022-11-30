import React, { FC } from "react";
import {Board} from "../models/Board";
import { Cell } from "../models/Cell";
import CellComponent from "./CellComponent";

interface BoardProps {
    board:Board;
    setBoard: (board: Board) => void
}


const BoardComponents: FC<BoardProps> = ({board, setBoard}) =>{

    return(

        <div className="board">
            {board.cells.map(
                (row: Cell[], index: number) =>
                <React.Fragment key={index}>
                        {row.map((cell: any) =>
                        <CellComponent
                        cell={cell}
                        key={cell.id}
                        />
                        )}
                </React.Fragment>
            )}
          
          
           
</div>

    )
}

export default BoardComponents;