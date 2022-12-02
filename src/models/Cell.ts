import { Board } from "./Board";
import { Colors } from "./Colors";
import {Figure} from "./figures/Figure"

export class Cell {
    readonly x: number;
    readonly y: number;
    readonly color: Colors;
    figure: Figure | null;
    board: Board;
    available: boolean; // можем ли перемещать
    id: number; // для реакт ключей    
    
    constructor(
        board: Board,
        x:  number,
        y: number, 
        color: Colors,
        figure: Figure | null
    ) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.figure = figure;
        this.board = board;
        this.available = false;
        this.id = Math.random();

        
    }

    isEmptyVertical(target:Cell): boolean{
        return true;
    }

    isEmptyHorizontal(target: Cell): boolean{
        return true;
    }

    isEmptyDiagonal(target:Cell): boolean{
        return true;
    }



    moveFigure(target:Cell) {
        //если фигура существует и клетка назначения не занята то переназначаем (передвигаем ее туда)
        if(this.figure && this.figure?.canMove(target)){
            this.figure.moveFigure(target)
            target.figure = this.figure;
            this.figure = null;
        }
    }
}

