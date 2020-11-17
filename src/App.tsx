import React, {useEffect} from 'react';
import './App.css';
import {Square} from "./common/components/Square";
import {initialStateType, setRandomAC} from "./redux/square-reducer";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./redux/store";

function App() {

    const {squares} = useSelector<RootState, initialStateType>(state => state)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setRandomAC(getRandomInt()))
    }, [dispatch])

    function getRandomInt(min = 1, max = 7, manyTime = 3): Array<number> {
        const ArrayRandomNumber = []
        while (manyTime) {
            ArrayRandomNumber.push(Math.floor(Math.random() * (max - min)) + min)
            manyTime--
        }
        console.log("ArrayRandomNumber", ArrayRandomNumber)
        return ArrayRandomNumber
    }

    const clickSubmitButton = () => {
        const selectedAnswer = squares.filter((el) => el.status).map((el) => el.id)
        const correctAnswer = squares.filter((el) => el.color).map(el => el.id)
        if (correctAnswer.length === selectedAnswer.length) {
            if (correctAnswer.filter(n => selectedAnswer.includes(n)).length === correctAnswer.length) {
                alert("Well done! Good job!")
                window.location.reload()
            } else {
                alert("Try again! The answer is not correct!")
            }
        } else {
            alert("Try again! The answer is not correct!")
        }
    }

    return <div >
        <div className={"squareAndBtn"}>
            {squares.map((el) => {
                return <Square key={el.id} value={el.id} color={el.color}/>
            })}
        </div>
        <div className={"squareAndBtn"}>
            <button onClick={clickSubmitButton}>SUBMIT</button>
        </div>
    </div>

}

export default App;
