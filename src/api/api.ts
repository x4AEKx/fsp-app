import { Data } from "../redux/appReducer"

export const getData = async (): Promise<Data> => {
	const response = await fetch("https://randomuser.me/api/?nat=us&results=1000")
	return response.json()
}
