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
            return {
                ...state,
                squares: [...state.squares.map((el) => action.random.includes(el.id)
                    ? {...el, color: true}
                    : el
                )],
                random: action.random,
            }
        case "set-status":
            return {
                ...state,
                squares: [...state.squares.map((el) => el.id === action.id
                    ? {...el, status: action.status}
                    : el)]
            }
        default:
            return state
    }
}

// actions
export const setRandom = (random: number[]) => ({type: "set-random", random} as const)
export const setStatus = (id: number, status: boolean) => ({type: "set-status", id, status} as const)

// types
type ActionType = ReturnType<typeof setRandom> | ReturnType<typeof setStatus>

export type initialStateType = {
    squares: Array<{ id: number, color: boolean, status: boolean }>
    random: number[],
}