import { createStore } from 'redux'
import {squareReducer} from "./square-reducer";

export const store = createStore(squareReducer)

export type RootState = ReturnType<typeof squareReducer>