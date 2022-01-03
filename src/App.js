import Countries from './components/Countries'
import SearchBar from './components/SearchBar'
import TopHeader from './components/TopHeader'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Country from './components/Country'

function App() {
	return (
		<Router>
			<TopHeader />

			<Routes>
				<Route exact path='/' element={<Countries />} />
			</Routes>
			<Routes>
				<Route exact path='/country/:name' element={<Country />} />
			</Routes>
		</Router>
	)
}

export default App
