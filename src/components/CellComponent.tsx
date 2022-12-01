import React, { FC } from "react";
import { Cell } from "../models/Cell";

interface CellProps{
    cell: Cell;
    selected: boolean; 
    clickFigure: (cell: Cell) => void;
}

const CellComponent: FC<CellProps> = ({cell, selected, clickFigure}) =>{
   
    return(
        /** если иконка есть то вытаскиваем ее  */
        <div 
        className={['cell', cell.color,  selected ? 'selected': '' ].join(' ')}
        onClick ={() => clickFigure(cell)}
        style={{background: cell.available && cell.figure ? 'green':''}}
        >
        {cell.available && !cell.figure && <div className={"available"}/>}    
        {cell.figure?.logo && <img src={cell.figure.logo} alt=""/>}
        </div>

    )
}

export default CellComponent;