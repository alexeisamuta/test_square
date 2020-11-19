import React, {useEffect} from "react";
import {Square} from "../common/components/Square";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../redux/store";
import {initialStateType, setRandom} from "../redux/square-reducer";
import style from "./MainComponent.module.css"


export const MainComponent = () => {

    const {squares} = useSelector<RootState, initialStateType>(state => state)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setRandom(getRandomInt()))
    }, [dispatch])

    function getRandomInt(min = 1, max = 7, manyTime = 3): Array<number> {
        const ArrayRandomNumber = []
        while (manyTime) {
            ArrayRandomNumber.push(Math.floor(Math.random() * (max - min)) + min)
            manyTime--
        }
        return ArrayRandomNumber
    }

    return <div className={style.square}>
        {squares.map((el, i) => {
            return <Square key={i} value={el.id} color={el.color} status={el.status}/>
        })}
    </div>
}