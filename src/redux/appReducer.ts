import { Dispatch } from "redux"

import { getData } from "../api/api"

export type Data = {
	results: Array<User>
}

export type User = {
	id: {
		value: string
	}
	name: {
		first: string
		last: string
	}
	email: string
	phone: string
}

export type Sorting = {
	label: string
	directionSort: string
}

export type InitialState = {
	users: Array<User>
	isLoading: boolean
	table: Array<Sorting>
	pageSize: number
	currentPage: number
	search: string
}

const initialState: InitialState = {
	users: [],
	isLoading: false,
	table: [
		{ label: "index", directionSort: "" },
		{ label: "first", directionSort: "" },
		{ label: "last", directionSort: "" },
		{ label: "email", directionSort: "" },
		{ label: "phone", directionSort: "" },
	],
	pageSize: 50,
	currentPage: 1,
	search: "",
}

const appReducer = (state = initialState, action: ActionsTypes): InitialState => {
	switch (action.type) {
		case "APP/SET_USERS": {
			return {
				...state,
				users: action.users,
			}
		}
		case "APP/TOGGLE_LOADING": {
			return {
				...state,
				isLoading: action.isLoading,
			}
		}
		case "APP/SET_SEARCH": {
			return {
				...state,
				search: action.search,
			}
		}
		case "APP/SET_TABLE_SORTING": {
			const changeColumn = state.table.map((e, index) => ({
				...e,
				directionSort: index === action.id ? action.currentSortMethod : "",
			}))
			return {
				...state,
				table: changeColumn,
			}
		}
		case "APP/SET_CURRENT_PAGE": {
			return {
				...state,
				currentPage: action.page,
			}
		}
		default:
			return state
	}
}

type ActionsTypes =
	| {
			type: "APP/SET_USERS"
			users: Array<User>
	  }
	| { type: "APP/TOGGLE_LOADING"; isLoading: boolean }
	| { type: "APP/SET_TABLE_SORTING"; id: number; currentSortMethod: string }
	| { type: "APP/SET_CURRENT_PAGE"; page: number }
	| {
			type: "APP/SET_SEARCH"
			search: string
	  }

export const setUsers = (users: Array<User>): ActionsTypes => {
	return {
		type: "APP/SET_USERS",
		users,
	}
}

const setLoading = (isLoading: boolean): ActionsTypes => {
	return {
		type: "APP/TOGGLE_LOADING",
		isLoading,
	}
}

export const setCurrentPage = (page: number): ActionsTypes => {
	return { type: "APP/SET_CURRENT_PAGE", page }
}

export const setTableSorting = (id: number, currentSortMethod: string): ActionsTypes => {
	return { type: "APP/SET_TABLE_SORTING", id, currentSortMethod }
}

export const setSearch = (search: string): ActionsTypes => {
	return {
		type: "APP/SET_SEARCH",
		search,
	}
}

export const getUsersThunk = () => async (dispatch: Dispatch<ActionsTypes>) => {
	dispatch(setLoading(true))
	const data: Data = await getData()
	const results = data.results
	dispatch(setUsers(results))
	dispatch(setLoading(false))
}

export default appReducer
