import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import List from './components/List';
import StoreNavbar from './components/StoreNavbar';

function App() {
  return (
    <div className="App">
      <StoreNavbar></StoreNavbar>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<List></List>}></Route>
          <Route path='/cart' element={<Cart></Cart>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
