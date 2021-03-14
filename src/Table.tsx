import { FC } from "react"

import { TableWrapper, TableMain, TR, TH, TD } from "./common/slyledComponents/styledComponents"
import { Sorting, User } from "./redux/appReducer"

type Props = {
	handleSort: (id: number, label: string, sortMethod: string) => void
	table: Array<Sorting>
	currentUsers: Array<User>
}

export const Table: FC<Props> = ({ handleSort, table, currentUsers }) => {
	return (
		<TableWrapper>
			<TableMain>
				<thead>
					<TR>
						{table.map((item, index) => (
							<TH
								key={item.label}
								sort={item.directionSort}
								onClick={() => handleSort(index, item.label, item.directionSort)}
							>
								{item.label}
							</TH>
						))}
					</TR>
				</thead>
				<tbody>
					{currentUsers.map((user) => (
						<TR key={user.id.value}>
							<TD>{user.id.value}</TD>
							<TD>{user.name.first}</TD>
							<TD>{user.name.last}</TD>
							<TD>{user.email}</TD>
							<TD>{user.phone}</TD>
						</TR>
					))}
				</tbody>
			</TableMain>
		</TableWrapper>
	)
}
