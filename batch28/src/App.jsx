import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import NoDependency from './Components/useEffect/NoDependency';
import EmptyDependency from './Components/useEffect/EmptyDependency';
import Register from './Components/Register';
import Practice from './Components/Practice';
import Login from './Components/Login';
import UseReducer from './Components/UseReducer';
import PropsDrilling from './Components/PropsDrilling/PropsDrilling';
import { useState } from 'react';
import Children from './Components/PropsDrilling/Children';
import AllProducts from './Components/10-3/AllProducts';
import FakeStoreApi from './Components/10-3/FakeStoreApi';
import ContextHome from './Components/Context/ContextHome';
import Todo from './Components/Todo';
import PageNotFound from './Components/Global/PageNotFound';
import Navbar from './Components/Global/Navbar';
import FakeStoreSingleProduct from './Components/10-3/FakeStoreSingleProduct';


function App() {
  const [students, setStudents] = useState(["Akshay","Srushti","Malhar","Eva"]);
  const [counter, setCounter] = useState("1234");
  const[products, setProducts] = useState([
    {name: "Shirt", image: "https://m.media-amazon.com/images/I/51uGECebmZL._AC_UY1100_.jpg"},
    {name: "Jeans", image: "https://m.media-amazon.com/images/I/51uGECebmZL._AC_UY1100_.jpg"},
    {name: "Cap", image: "https://m.media-amazon.com/images/I/51uGECebmZL._AC_UY1100_.jpg"},
  ])
  const [employee, setEmployee] = useState(["Virat", "Rahul", "Sachin"]);
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='prac' element={<Practice employee={employee}/>}/>
        <Route path='*' element={<PageNotFound/>}/>
        <Route path='/' element={<Home />} />
        <Route path='no-dependency' element={<NoDependency/>} />
        <Route path='empty-dependency' element={<EmptyDependency/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='use-reducer' element={<UseReducer/>}/>
        <Route path='props-drilling' element={<PropsDrilling students={students} counter={counter}/>}/>
        <Route path='all-products' element={<AllProducts awdiz={products}/>}/>
        <Route path='fake-store-api' element={<FakeStoreApi/>}/>
        <Route path='fake-store-single-product/:id' element={<FakeStoreSingleProduct/>}/>
        <Route path='context-home' element={<ContextHome/>}/>
        <Route path='todo' element={<Todo/>}/>
      </Routes>
    </div>
  );
}

export default App;
