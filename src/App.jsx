import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import PopularPage from './pages/PopularPage'
import InTheatresPage from './pages/InTheatresPage'
import NotFound from './pages/NotFound'
import './assets/scss/App.scss'
import { ReactQueryDevtools } from 'react-query/devtools'

function App() {
	return (
		<div id="App">
			<Navigation />

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/genre" element={<HomePage />} />
				<Route path="/popular" element={<PopularPage />} />
				<Route path="/in_theatres" element={<InTheatresPage />} />
				<Route path="/top_rated" element={<HomePage />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			
			<ReactQueryDevtools />
		</div>
	)
}

export default App
