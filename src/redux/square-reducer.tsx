const initialState: initialStateType = {
    squares: [
        {id: 1, color: false, status: false},
        {id: 2, color: false, status: false},
        {id: 3, color: false, status: false},
        {id: 4, color: false, status: false},
        {id: 5, color: false, status: false},
        {id: 6, color: false, status: false}
    ],
    random: [0, 0, 0]
}

export const squareReducer = (state = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case "set-random":
            const [r1, r2, r3] = action.random
            return {
                ...state,
                squares: [...state.squares.map(el => {if (el.id === r1 || el.id === r2 || el.id === r3) {el.color = true}
                        return el
                    })],
                random: action.random,
            }
        case "set-status":
            const foundSquare = state.squares.find((el) => el.id === action.id)
            if (foundSquare) {
                foundSquare.status = action.status
                return {...state}
            }
            return state
        default:
            return state
    }
}

export const setRandomAC = (random: number[]) => ({type: "set-random", random} as const)
export const setStatusAC = (id: number, status: boolean) => ({type: "set-status",id, status} as const)

type ActionType = ReturnType<typeof setRandomAC> | ReturnType<typeof setStatusAC>


export type initialStateType = {
    squares: Array<{id: number, color: boolean, status: boolean}>
    random: number[],
}