import React from "react";
import style from "./Square.module.css"
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {initialStateType, setStatusAC} from "../../redux/square-reducer";

type SquareType = {
    value: number
    color: boolean
}
export const Square = React.memo((props: SquareType) => {

    const {squares} = useSelector<RootState, initialStateType>(state => state)
    const dispatch = useDispatch()

    const ChangeStatusFunction = (status: boolean) => {
        dispatch(setStatusAC(props.value, status))
    }

    const classNameWithColor = props.color
        ? style.square + " " + style.blue
        : style.square

    return squares.find((el) => el.id === props.value)!.status
        ? <div className={classNameWithColor + " " + style.active}
               onClick={() => ChangeStatusFunction(false)}>{props.value}</div>
        : <div className={classNameWithColor}
               onClick={() => ChangeStatusFunction(true)}>{props.value}</div>
})