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
import EmptyDependency from './Components/DayWise/EmptyDependency';
import SingleDependency from './Components/DayWise/SingleDependency';
import MultipleDependency from './Components/DayWise/MultipleDependency';
import DynamicRouting from './Components/DayWise/DynamicRouting';
import UseParams from './Components/DayWise/UseParam';

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
          <Route path='/emptyDependency' element={<EmptyDependency/>} />
          <Route path='/singledependency' element={<SingleDependency/>} />
          <Route path='/multipledependency' element={<MultipleDependency/>} />
          <Route path='/dynamic-routing' element={<DynamicRouting/>} />
          <Route path='/use-params/:age' element={<UseParams/>} />
       </Routes>
       <Footer />
    </div>
  );
}
export default App;
