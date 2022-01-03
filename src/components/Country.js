import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import { Link, useParams } from 'react-router-dom'
import '../styles.css'

const BackBtn = styled(Link)`
	color: var(--Maintext-dark-color);
	font-size: 0.8rem;
	background-color: var(--lightDark-bg-color);
	display: flex;
	align-items: center;
	height: 2rem;
	text-decoration: none;
	padding-left: 1.5rem;
	cursor: pointer;
	margin-block: 3rem;
	margin-left: 5.9rem;
	transition: left 250ms ease-in-out, right 250ms ease-in-out;
	letter-spacing: 2.7px;
	font-family: 'Nunito Sans';
	width: 7rem;
	border-radius: 5px;

	&:hover {
		color: #ffffff;
		transition: left 250ms ease-in-out, right 250ms ease-in-out;
		font-size: 0.9rem;
		background-color: var(--darkBody-bg-color);
	}
`

const Country = () => {
	const [country, setCountry] = useState([])
	const { name } = useParams()

	useEffect(() => {
		const getCountriesData = async () => {
			const response = await fetch(`https://restcountries.com/v2/name/${name}`)
			const countries = await response.json()
			setCountry(countries)
			console.log(countries)
		}
		getCountriesData()
	}, [])

	return (
		<>
			<BackBtn to={`/`}>
				<FontAwesomeIcon icon={faArrowLeft} style={{ marginRight: 10 }} />
				Back
			</BackBtn>
			<section className='main-container'>
				{country.map(countries => {
					const {
						numericCode,
						name,
						population,
						capital,
						region,
						flag,
						nativeName,
						borders,
						currencies,
						topLevelDomain,
						subregion,
						languages
					} = countries

					return (
						<article className='article-container' key={numericCode}>
							<div className='inner-article'>
								<div>
									<img className='country-image' src={flag} alt={name} />
								</div>
								<div className='country-details'>
									<div>
										<h1 to={`/country/${name}`}>{name}</h1>
										<h4>
											Native Name: <span>{nativeName}</span>
										</h4>
										<h4>
											Population: <span>{population}</span>
										</h4>
										<h4>
											Region: <span>{region}</span>
										</h4>
										<h4>
											Sub Region: <span>{subregion}</span>
										</h4>
										<h4>
											Capital: <span>{capital}</span>
										</h4>
									</div>
									<div>
										<h4>
											Top Level Domain: <span>{topLevelDomain[0]}</span>
										</h4>
										<h4>
											Currencies: <span>{currencies[0].name}</span>
										</h4>
										<h4>
											Languages: <span>{languages[0].name}</span>
										</h4>
									</div>
								</div>
							</div>

							<div>
								<h3>Border Countries: </h3>
								<div className='border-styles'>
									{borders.map(border => {
										return (
											<ul key={border}>
												<li>{border}</li>
											</ul>
										)
									})}
								</div>
							</div>
						</article>
					)
				})}
			</section>
		</>
	)
}

export default Country
