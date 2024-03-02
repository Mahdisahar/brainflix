import './App.scss';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import Videopage from './pages/Videopage/Videopage';
import Header from './components/Header/Header';

function App () {
	return (
		<BrowserRouter>
		<Header />
		<Routes>
			<Route path='/' element={<Homepage />} />
			<Route path='/videos/:id' element= {<Homepage />} />
			<Route path='/video' element={< Videopage/>} />
			<Route path='*' element={<Homepage />}/>
		</Routes>
		</BrowserRouter>
	);
}

export default App;
// url is  https://unit-3-project-api-0a5620414506.herokuapp.com/
// {"api_key":"4d84c38d-eed7-4f2e-84cb-cda8f2dbfd81"}