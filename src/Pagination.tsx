import { FC } from "react"

import { User } from "./redux/appReducer"
import { PaginationWrappper, PaginationStyled } from "./common/slyledComponents/styledComponents"

type Props = {
	currentUserPage: number
	filteredUsers: Array<User>
	pageSize: number
	handlePaginate: (page: number) => void
}

export const Pagination: FC<Props> = ({
	currentUserPage,
	filteredUsers,
	pageSize,
	handlePaginate,
}) => {
	const pages = []

	for (let i = 1; i <= Math.ceil(filteredUsers.length / pageSize); i++) {
		pages.push(i)
	}

	return (
		<PaginationWrappper>
			{pages.map((page) => (
				<PaginationStyled
					page={page}
					currentUserPage={currentUserPage}
					onClick={() => handlePaginate(page)}
				>
					{page}
				</PaginationStyled>
			))}
		</PaginationWrappper>
	)
}
