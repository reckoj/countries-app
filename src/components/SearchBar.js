import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchBar = ({ handleChange, searchTerm, setCountries }) => {
	const [region, setRegion] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	const regions = [
		{
			name: 'Africa'
		},
		{
			name: 'Americas'
		},
		{
			name: 'Asia'
		},
		{
			name: 'Europe'
		},
		{
			name: 'Oceanica'
		}
	]

	const fetchRegion = async () => {
		const response = await fetch(
			`https://restcountries.com/v2/regionalbloc/{regionalbloc}/${region}`
		)
		const data = await response.json()
		setRegion(data)
		// setCountries(data)
	}
	useEffect(() => {
		fetchRegion()
	}, [region])

	return (
		<>
			<section className='SeachBarContainer'>
				<form>
					{/* <FontAwesomeIcon icon={faSearch} /> */}
					<input
						value={searchTerm}
						type='search'
						placeholder='Search for a country...'
						name='search'
						id='search'
						onChange={e => handleChange(e.target.value)}
					/>
				</form>

				<div>
					<select
						name='select'
						value={region.name}
						id='select'
						className='selectBox'
						onChange={e => fetchRegion(e.target.value)}
					>
						<option value='region'>Filter by region</option>
						<option value='africa'>Africa</option>
						<option value='america'>America</option>
						<option value='asia'>Asia</option>
						<option value='europe'>Europe</option>
						<option value='search'>Oceanica</option>
					</select>
				</div>
			</section>
		</>
	)
}

export default SearchBar
