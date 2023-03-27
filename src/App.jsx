import './App.css'

//3- import React Router
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//1- import components
import Header from './components/Header';
import Home from './routes/Home';

function App() {
  return (
    <div className="App">
{/* 2- */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App