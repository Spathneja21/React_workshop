import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Keyboard from './components/Keyboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Keyboard/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
