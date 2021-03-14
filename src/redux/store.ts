import thunkMiddleware from "redux-thunk"
import { applyMiddleware, combineReducers, createStore, compose } from "redux"

import appReducer from "./appReducer"

let rootReducer = combineReducers({
	app: appReducer,
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store
