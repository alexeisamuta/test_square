import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "./redux/store";
import {initialStateType} from "./redux/square-reducer";
import {MainComponent} from "./components/MainComponent";
import "./App.css";

function App() {

    const {squares} = useSelector<RootState, initialStateType>(state => state)

    const clickSubmitButton = () => {

        const selectedAnswer = squares.filter((el) => el.status).map((el) => el.id)
        const correctAnswer = squares.filter((el) => el.color).map((el) => el.id)

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

    return <div>
        <div>
            <MainComponent/>
        </div>
        <div className={"btn"}>
            <button onClick={clickSubmitButton}>SUBMIT</button>
        </div>
    </div>

}

export default App;
