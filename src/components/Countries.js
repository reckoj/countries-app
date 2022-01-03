import React, { useState, useEffect } from 'react'
import axiois from 'axios'
import { Link as link } from 'react-router-dom'
import SearchBar from './SearchBar'
import styled from 'styled-components'

const NameLink = styled(link)`
	color: #ffffff;
	font-size: 1.3rem;
	font-weight: bold;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding-bottom: 1rem;
	cursor: pointer;
	margin-block: 1rem;
	letter-spacing: 2.7px;
	font-family: 'Nunito Sans';
	background-color: 

	&:hover {
		color: #ffffff;
		transition: left 250ms ease-in-out, right 250ms ease-in-out;
		font-size: 0.9rem;
		background-color: var(--darkBody-bg-color);
	}
`

const url = 'https://restcountries.com/v2/all'

const Countries = () => {
	const [countries, setCountries] = useState([])

	const getCountries = async () => {
		const response = await fetch(url)
		const countries = await response.json()
		setCountries(countries)
	}
	useEffect(() => {
		getCountries()
	}, [])

	const [searchTerm, setSearchTerm] = useState('')
	const [searchResults, setSearchResults] = useState([])

	const handleChange = event => {
		setSearchTerm(event)

		if (searchTerm) {
			const results = countries.filter(country =>
				Object.values(country)
					.join('')
					.toLowerCase()
					.includes(searchTerm.toLowerCase())
			)
			setSearchResults(results)
		} else {
			setSearchResults(countries)
		}
	}

	return (
		<>
			<SearchBar
				handleChange={handleChange}
				searchTerm={searchTerm}
				setCountries={setCountries}
			/>
			{searchTerm.length > 0 ? (
				<section className='grid'>
					{searchResults.map(country => {
						const { numericCode, name, population, capital, region, flag } =
							country

						return (
							<article key={numericCode}>
								<div className='div-image'>
									<img className='images' src={flag} alt={name} />
								</div>
								<div className='details'>
									<NameLink to={`/country/${name}`}>{name}</NameLink>
									<h3>
										Population: <span>{population}</span>
									</h3>
									<h3>
										Region: <span>{region}</span>
									</h3>
									<h3>
										Capital: <span>{capital}</span>
									</h3>
								</div>
							</article>
						)
					})}
				</section>
			) : (
				<section className='grid'>
					{countries.map(country => {
						const { numericCode, name, population, capital, region, flag } =
							country

						return (
							<article key={numericCode}>
								<div className='div-image'>
									<img className='images' src={flag} alt={name} />
								</div>
								<div className='details'>
									<NameLink to={`/country/${name}`}>{name}</NameLink>
									<h3>
										Population: <span>{population}</span>
									</h3>
									<h3>
										Region: <span>{region}</span>
									</h3>
									<h3>
										Capital: <span>{capital}</span>
									</h3>
								</div>
							</article>
						)
					})}
				</section>
			)}
		</>
	)
}

export default Countries
