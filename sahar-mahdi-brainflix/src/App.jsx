import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import Videopage from './pages/Videopage/Videopage';
import Header from './components/Header/Header';
import Errorpage from './pages/ErrorPage/Errorpage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/videos/:id' element={<Homepage />} />
        <Route path='/video' element={<Videopage />} />
        <Route path='*' element={<Errorpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
