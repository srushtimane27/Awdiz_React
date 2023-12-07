import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Register from './Components/Register';
import Login from './Components/Login';
import PageNotFound from './Components/PageNotFound';
import Navbar from './Components/Navbar'; 
import Footer from './Components/Footer';
import Counter from './Components/Counter';
import UseEffect from './Components/DayWise/UseEffect';
import CounterTwo from './Components/DayWise/CounterTwo';

function App() {
  return (
    <div className="App">
      <Navbar />
       <Routes>
          <Route path='*' element={<PageNotFound/>} />
          <Route path='/' element={<Home/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/counter' element={<Counter/>} />
          <Route path='/useeffect' element={<UseEffect/>} />
          <Route path='/countertwo' element={<CounterTwo/>} />
       </Routes>
       <Footer />
    </div>
  );
}
export default App;
