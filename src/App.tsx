import { FC } from "react"

import { Wrapper, Preloader } from "./common/slyledComponents/styledComponents"
import { Table } from "./Table"
import { Pagination } from "./Pagination"
import { Search } from "./Search"
import { Sorting, User } from "./redux/appReducer"

type Props = {
	handleSearch: (search: string) => void
	currentUserPage: number
	filteredUsers: Array<User>
	pageSize: number
	handlePaginate: (page: number) => void
	handleSort: (id: number, label: string, sortMethod: string) => void
	table: Array<Sorting>
	currentUsers: Array<User>
	loading: boolean
}

export const App: FC<Props> = ({
	handleSearch,
	currentUserPage,
	filteredUsers,
	pageSize,
	handlePaginate,
	handleSort,
	table,
	currentUsers,
	loading,
}) => {
	return (
		<Wrapper>
			{loading ? (
				<Preloader>...Loading</Preloader>
			) : (
				<>
					<Search handleSearch={handleSearch} />
					<Pagination
						currentUserPage={currentUserPage}
						filteredUsers={filteredUsers}
						pageSize={pageSize}
						handlePaginate={handlePaginate}
					/>
					<Table handleSort={handleSort} table={table} currentUsers={currentUsers} />
				</>
			)}
		</Wrapper>
	)
}
