import logo from '../../assets/black-king.png'
import { Cell } from '../Cell';
import { Colors } from '../Colors';

export enum FigureNames{
    FIGURE ="Фигура",
    KING = "Король",
    KNIGHT = "Конь",
    PAWN = "Пешка",
    QUEEN = "Ферзь",
    ROOK = "Ладья",
    BISHOP = "Слон",
}

export class Figure{
    color: Colors;
    logo: typeof logo | null;
    cell: Cell;
    name: FigureNames;
    id: number;


    constructor(color: Colors, cell: Cell){
        
        this.color = color;
        this.cell = cell;
        this.cell.figure = this;
        this.logo = null;
        this.name = FigureNames.FIGURE
        this.id = Math.random()

    }
    //** в родительском классе обьявляем общие условия возможности хода для всех фигур */
    canMove(target: Cell) : boolean {
        //** Нельзя ходить на клетки с фигурами своего цвета */
        if(target.figure?.color === this.color) return false;
        //** Нельзя ходить на клетку с королем потому что если доступен такой ход значит игра закончена*/
        if(target.figure?.name === FigureNames.KING) return false;
        return true;
    }

    moveFigure(target: Cell){

    }
}