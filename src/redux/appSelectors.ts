import { createSelector } from "reselect"

import { AppStateType } from "./../redux/store"

export const getUsers = (state: AppStateType) => {
	return state.app.users
}

export const getTable = (state: AppStateType) => {
	return state.app.table
}

export const isLoading = (state: AppStateType) => {
	return state.app.isLoading
}

export const getSearch = (state: AppStateType) => {
	return state.app.search
}

export const currentPage = (state: AppStateType) => {
	return state.app.currentPage
}

export const pageSizeSelector = (state: AppStateType) => {
	return state.app.pageSize
}

export const filteredUsersSelector = createSelector(getUsers, getSearch, (users, search) => {
	if (!search) {
		return users
	}

	return users.filter((item) => {
		return (
			item.id.value.toLowerCase().includes(search.toLowerCase()) ||
			item.name.first.toLowerCase().includes(search.toLowerCase()) ||
			item.name.last.toLowerCase().includes(search.toLowerCase()) ||
			item.email.toLowerCase().includes(search.toLowerCase()) ||
			item.phone.toLowerCase().includes(search.toLowerCase())
		)
	})
})
