import React, { FC } from "react";
import { Cell } from "../models/Cell";

interface CellProps{
    cell: Cell
}

const CellComponent: FC<CellProps> = ({cell: Cell}) =>{

    return(

        <div className={['cell', Cell.color].join(' ')}>
         
        </div>

    )
}

export default CellComponent;