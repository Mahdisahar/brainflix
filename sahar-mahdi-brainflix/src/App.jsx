import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import Videopage from './pages/Videopage/Videopage';
import Header from './components/Header/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/videos/:id' element={<Homepage />} />
        <Route path='/video' element={<Videopage />} />
        <Route path='*' element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
