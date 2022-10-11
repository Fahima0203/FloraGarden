// import logo from './logo.svg';
// import './App.css';
import Cards from '../src/Pages/Card.jsx'
import Home from '../src/Pages/Home.jsx'
import Forms from '../src/Pages/Forms'
// import Login from '../src/Login/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
  {/* <Login/> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/cards' element={<Cards />}></Route>
          <Route path='/forms' element={<Forms/>}></Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
