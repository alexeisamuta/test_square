import React from "react";
import style from "./Square.module.css"
import {useDispatch} from "react-redux";
import {setStatus} from "../../redux/square-reducer";

type SquareType = {
    value: number
    color: boolean
    status: boolean
}
export const Square = React.memo((props: SquareType) => {

    const dispatch = useDispatch()

    const ChangeStatusFunction = (status: boolean) => {
        dispatch(setStatus(props.value, status))
    }

    const classNameWithColor = props.color
        ? style.square + " " + style.blue
        : style.square

    return props.status
        ? <div className={classNameWithColor + " " + style.active}
               onClick={() => ChangeStatusFunction(false)}>{props.value}</div>
        : <div className={classNameWithColor}
               onClick={() => ChangeStatusFunction(true)}>{props.value}</div>
})