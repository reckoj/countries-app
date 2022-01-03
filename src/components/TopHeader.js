import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faCheckSquare,
	faCoffee,
	faMoon,
	faSun
} from '@fortawesome/free-solid-svg-icons'
import useLocalStorage from 'react-use-localstorage'

const TopHeader = () => {
	const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches
	const [theme, setTheme] = useLocalStorage(
		'theme',
		defaultDark ? 'dark' : 'light'
	)

	const switchTheme = () => {
		const newTheme = theme === 'Light mode' ? 'Dark mode' : 'Light mode'
		setTheme(newTheme)
	}

	return (
		<>
			<header className='headerContainer' data-theme={theme}>
				<div>
					<h4 className='headerText'>Where in the world?</h4>
				</div>
				<div className='button'>
					<FontAwesomeIcon icon={faMoon} size='2x' style={{ marginRight: 5 }} />
					<button onClick={switchTheme}>{theme}</button>
				</div>
			</header>
		</>
	)
}

export default TopHeader
