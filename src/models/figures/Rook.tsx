import { Cell } from "../Cell";
import { Colors } from "../Colors";
import {Figure, FigureNames} from "./Figure" 
import blackLogo from '../../assets/rook-bishop.png'
import whiteLogo from '../../assets/rook-bishop.png'

export class Rook extends Figure {
    constructor(color:Colors, cell: Cell){
        super(color, cell)
        this.logo = color === Colors.BLACK? blackLogo : whiteLogo;
        this.name = FigureNames.ROOK;
    }
}