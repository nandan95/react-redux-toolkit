
import './App.css';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart'
// Reference youtube video is - https://www.youtube.com/watch?v=gQ_l-1zpVBo
function App() {
  return (
    <BrowserRouter>
    
    <Header/>
    <div className="App">
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
