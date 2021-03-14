import { User } from "../redux/appReducer"

type sortingFuncType = (arr: Array<User>, label: string, orderBy: string) => Array<User>

export const sortingFunc: sortingFuncType = (arr, label, orderBy) => {
	debugger
	function asc(a: any, b: any): number {
		switch (label) {
			case "index":
				if (a["id"]["value"].toLowerCase() > b["id"]["value"].toLowerCase()) {
					return 1
				} else if (a["id"]["value"].toLowerCase() < b["id"]["value"].toLowerCase()) {
					return -1
				}
				return 0
			case "first":
			case "last":
				if (a["name"][label].toLowerCase() > b["name"][label].toLowerCase()) {
					return 1
				} else if (a["name"][label].toLowerCase() < b["name"][label].toLowerCase()) {
					return -1
				}
				return 0
			case "email":
			case "phone":
				if (a[label].toLowerCase() > b[label].toLowerCase()) {
					return 1
				} else if (a[label].toLowerCase() < b[label].toLowerCase()) {
					return -1
				}
				return 0
			default:
				return 0
		}
	}

	function desc(a: any, b: any): number {
		switch (label) {
			case "index":
				if (a["id"]["value"].toLowerCase() < b["id"]["value"].toLowerCase()) {
					return 1
				} else if (a["id"]["value"].toLowerCase() > b["id"]["value"].toLowerCase()) {
					return -1
				}
				return 0
			case "first":
			case "last":
				if (a["name"][label].toLowerCase() < b["name"][label].toLowerCase()) {
					return 1
				} else if (a["name"][label].toLowerCase() > b["name"][label].toLowerCase()) {
					return -1
				}
				return 0
			case "email":
			case "phone":
				if (a[label].toLowerCase() < b[label].toLowerCase()) {
					return 1
				} else if (a[label].toLowerCase() > b[label].toLowerCase()) {
					return -1
				}
				return 0
			default:
				return 0
		}
	}

	switch (orderBy) {
		case "asc":
			return arr.sort(asc)
		case "desc":
			return arr.sort(desc)
		default:
			return arr
	}
}
