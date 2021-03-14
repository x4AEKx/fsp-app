import { FC, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { App } from "./App"
import {
	getUsersThunk,
	setTableSorting,
	setUsers,
	setCurrentPage,
	setSearch,
} from "./redux/appReducer"
import { getUsers, isLoading, getTable } from "./redux/appSelectors"
import { sortingFunc } from "./common/utils"
import { currentPage, filteredUsersSelector, pageSizeSelector } from "./redux/appSelectors"

export const AppContainer: FC = () => {
	const dispatch = useDispatch()
	const loading = useSelector(isLoading)
	const users = useSelector(getUsers)
	const table = useSelector(getTable)
	const filteredUsers = useSelector(filteredUsersSelector)
	const currentUserPage = useSelector(currentPage)
	const pageSize = useSelector(pageSizeSelector)

	useEffect(() => {
		dispatch(getUsersThunk())
	}, [dispatch])

	const handlePaginate = (page: number) => {
		dispatch(setCurrentPage(page))
	}

	const handleSearch = (search: string) => {
		dispatch(setCurrentPage(1))
		dispatch(setSearch(search))
	}

	const handleSort = (id: number, label: string, sortMethod: string) => {
		let currentSortMethod = ""
		switch (sortMethod) {
			case "":
				currentSortMethod = "asc"
				break
			case "asc":
				currentSortMethod = "desc"
				break
			case "desc":
				currentSortMethod = "asc"
				break
			default:
				currentSortMethod = "asc"
		}

		const sortData = sortingFunc(users, label, currentSortMethod)

		dispatch(setTableSorting(id, currentSortMethod))
		dispatch(setUsers(sortData))
	}

	const indexOfLastPost = currentUserPage * pageSize
	const indexOfFirstPost = indexOfLastPost - pageSize
	const currentUsers = filteredUsers.slice(indexOfFirstPost, indexOfLastPost)

	return (
		<App
			handleSearch={handleSearch}
			currentUserPage={currentUserPage}
			filteredUsers={filteredUsers}
			pageSize={pageSize}
			handlePaginate={handlePaginate}
			handleSort={handleSort}
			table={table}
			currentUsers={currentUsers}
			loading={loading}
		/>
	)
}
