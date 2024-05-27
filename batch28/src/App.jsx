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
import CurrencyConverter from './Components/RapidApiProjects/CurrencyConverter';
import CounterHome from './Components/PracticeFolder/CounterHome';
import CounterRedux from './Components/CounterRedux';
import Covid from './Components/RapidApiProjects/Covid';
import Jokes from './Components/RapidApiProjects/Jokes';
import AddProduct from './Components/Global/AddProduct';
import Seller from './Components/Project/Seller';
import YourProduct from './Components/Project/YourProduct';
import Cart from './Components/Cart';


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
        <Route path='no-dependency' element={<NoDependency/>} />
        <Route path='empty-dependency' element={<EmptyDependency/>}/>
        <Route path='use-reducer' element={<UseReducer/>}/>
        <Route path='props-drilling' element={<PropsDrilling students={students} counter={counter}/>}/>
        <Route path='fake-store-api' element={<FakeStoreApi/>}/>
        <Route path='fake-store-single-product/:id' element={<FakeStoreSingleProduct/>}/>
        <Route path='context-home' element={<ContextHome/>}/>
        <Route path='todo' element={<Todo/>}/>
        <Route path='currency' element={<CurrencyConverter/>}/>
        <Route path='counter' element={<CounterHome/>}/>
        <Route path='counter-redux' element={<CounterRedux/>}/>
        <Route path='covid' element={<Covid/>}/>
        <Route path='jokes' element={<Jokes/>}/>
        


        <Route path='*' element={<PageNotFound/>}/>
        <Route path='/' element={<Home />} />
        
        <Route path='/seller' element={<Seller/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/all-products' element={<AllProducts awdiz={products}/>}/>
        <Route path='/add-product' element={<AddProduct/>}/>
        <Route path='/your-product' element={<YourProduct/>}/>
        <Route path='/cart' element={<Cart/>}/>







      </Routes>
    </div>
  );
}

export default App;
