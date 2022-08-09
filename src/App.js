import React from 'react';
import Header from './component/Header';
import Menu from './component/Menu';
import Memo from './component/Memo';
import Footer from './component/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
function App() {
  const [number, setNumber] = useState(0);
  const handleCounter = () => {
    setNumber(number + 1);
  };
  const handleReset = () => {
    setNumber(0);
  };
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path='/menu' element={<Menu />} />
          <Route path='/memo' element={<Memo />} />
        </Routes>
        <Footer />
        <button onClick={handleCounter}>counter</button>
        <button onClick={handleReset}>reset</button>
        <div>{number}</div>
        <div>App.js작동중</div>
      </div>
    </BrowserRouter>
  );
}

export default App;
