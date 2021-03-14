import { FC, useState, ChangeEvent } from "react"

import { InputWrapper, Input } from "./common/slyledComponents/styledComponents"

type Props = {
	handleSearch: (search: string) => void
}

export const Search: FC<Props> = ({ handleSearch }) => {
	const [value, setValue] = useState("")

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.currentTarget.value)
		handleSearch(e.currentTarget.value.trim())
	}
	return (
		<InputWrapper>
			<fieldset>
				<legend>Search:</legend>
				<Input type="text" onChange={handleChange} value={value} />
			</fieldset>
		</InputWrapper>
	)
}
