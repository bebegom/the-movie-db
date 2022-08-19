import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import PopularPage from './pages/PopularPage'
import InTheatresPage from './pages/InTheatresPage'
import TopRatedPage from './pages/TopRatedPage'
import GenresPage from './pages/GenresPage'
import NotFound from './pages/NotFound'
import './assets/scss/App.scss'
import { ReactQueryDevtools } from 'react-query/devtools'
import MoviePage from './pages/MoviePage'
import ActorPage from './pages/ActorPage'

function App() {
	return (
		<div id="App">
			<Navigation />

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/movie/:movieId" element={<MoviePage />} />
				<Route path="/actor/:actorId" element={<ActorPage />} />
				<Route path="/genres/:genre" element={<GenresPage />} />
				<Route path="/popular" element={<PopularPage />} />
				<Route path="/in_theatres" element={<InTheatresPage />} />
				<Route path="/top_rated" element={<TopRatedPage />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			
			<ReactQueryDevtools />
		</div>
	)
}

export default App
