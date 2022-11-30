import { Cell } from "../Cell";
import { Colors } from "../Colors";
import {Figure, FigureNames} from "./Figure" 
import blackLogo from '../../assets/knight-bishop.png'
import whiteLogo from '../../assets/knight-bishop.png'

export class Knight extends Figure {
    constructor(color:Colors, cell: Cell){
        super(color, cell)
        this.logo = color === Colors.BLACK? blackLogo : whiteLogo;
        this.name = FigureNames.KNIGHT;
    }
}