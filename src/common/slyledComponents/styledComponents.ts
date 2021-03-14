import styled from "styled-components"

import { COLORS, BACKGROUND_COLORS } from "./variables"

//App

export const Wrapper = styled.div`
	max-width: 60em;
	margin: 0 auto;
	text-align: center;
	padding: 0 15px;
`

// Preloader

export const Preloader = styled.div`
	margin-top: 50%;
`

//Search

export const InputWrapper = styled.div`
	margin-top: 15px;
`

export const Input = styled.input`
	border: 1px solid ${BACKGROUND_COLORS.secondary};
	outline: none;
`

//Pagination

export const PaginationWrappper = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 15px;
`

type PaginationType = {
	currentUserPage: number
	page: number
}

export const PaginationStyled = styled.span`
	cursor: pointer;
	color: ${(props: PaginationType) =>
		props.currentUserPage === props.page ? COLORS.secondary : COLORS.primary};
	padding: 4px 8px;
	text-decoration: none;
	transition: background-color 0.3s;
	border-top: 1px solid;
	border-left: 1px solid;
	border-bottom: 1px solid;
	border-color: ${BACKGROUND_COLORS.secondary};
	&:last-child {
		border-right: 1px solid ${BACKGROUND_COLORS.secondary};
	}
	background-color: ${(props: PaginationType) =>
		props.currentUserPage === props.page ? BACKGROUND_COLORS.secondary : BACKGROUND_COLORS.primary};
`

//Table

export const TableWrapper = styled.div`
	margin: 15px 0;
`

export const TableMain = styled.table`
	border: 1px solid ${BACKGROUND_COLORS.secondary};
	border-collapse: collapse;
	margin: 0;
	padding: 0;
	width: 100%;
`

export const TR = styled.tr`
	border: 1px solid ${BACKGROUND_COLORS.secondary};
	padding: 5px;
	&:nth-child(even) {
		background-color: ${BACKGROUND_COLORS.secondary};
		color: ${COLORS.secondary};
	}
`

type THtype = {
	sort: string
}

export const TH = styled.th`
	cursor: pointer;
	padding: 10px;
	text-align: center;
	font-size: 14px;
	letter-spacing: 1px;
	text-transform: uppercase;
	background-color: ${BACKGROUND_COLORS.secondary};
	color: ${COLORS.secondary};
	&:before {
		content: "${(props: THtype) =>
			props.sort === "asc" ? "▼" : props.sort === "desc" ? "▲" : ""}";
	}
`

export const TD = styled.td`
	padding: 10px;
	text-align: center;
`
