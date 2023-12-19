import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/DayWise/Home';
import Register from './Components/DayWise/Register';
import Login from './Components/DayWise/Login';
import PageNotFound from './Components/DayWise/PageNotFound';
import Navbar from './Components/DayWise/Navbar'; 
import Footer from './Components/DayWise/Footer';
import Counter from './Components/DayWise/Counter';
import UseEffect from './Components/DayWise/UseEffect';
import CounterTwo from './Components/DayWise/CounterTwo';
import EmptyDependency from './Components/DayWise/EmptyDependency';
import SingleDependency from './Components/DayWise/SingleDependency';
import MultipleDependency from './Components/DayWise/MultipleDependency';
import DynamicRouting from './Components/DayWise/DynamicRouting';
import UseParams from './Components/DayWise/UseParam';
import { Children, useState } from 'react';
import PropsMaps from './Components/DayWise/PropsMaps';
import MapObject from './Components/DayWise/MapObject';
import Practice from './Components/DayWise/Practice';
import Js from './Components/Js';
import ChildrenProp from './Components/DayWise/ChildrenProp';
import RegisterForm from './Components/DayWise/RegisterForm';
import LoginForm from './Components/DayWise/LoginForm';
import ChildToParent from './Components/DayWise/ChildToParent';
import AllProducts from './Components/DayWise/AllProducts';



function App() {

  const [myName, setMyName] = useState("HTML")
  const [myFlower, setMyFlower] = useState("Rose")

  const [students, setStudents] = useState([{ image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs1wQLZqIhYASivJhwDTSzAD7sN-N9w-3sCQKc4XrV8wIgFwsB-Sb_RRqKe3akMfSPxiA&usqp=CAU', name: "Malhar", marks: "40" }, { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs1wQLZqIhYASivJhwDTSzAD7sN-N9w-3sCQKc4XrV8wIgFwsB-Sb_RRqKe3akMfSPxiA&usqp=CAU", name: "Akshay", marks: "80" }, { name: "rohit", marks: "100", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs1wQLZqIhYASivJhwDTSzAD7sN-N9w-3sCQKc4XrV8wIgFwsB-Sb_RRqKe3akMfSPxiA&usqp=CAU" }]);

  
  function ChangeName(){
    setMyName("Pune University")
  }

  return (
    <div className="App">
      <Navbar />
       <Routes>
          <Route path='*' element={<PageNotFound/>} />
          <Route path='/' element={<Home/>} />
          <Route path='/practice' element={<Practice/>}/>
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
          <Route path='/propsmaps' element={<PropsMaps hello={myName} myAge="25" flower={myFlower} ChangeName={ChangeName} myStudents={["Srushti","Akshay","Eva"]}/>} />
          <Route path='/mapobject' element={<MapObject myStudentData={students}/>}/>
          <Route path='/js' element={<Js/>}/>
          <Route path='/childprop' element={<ChildrenProp/>}/>
          <Route path='/register-form' element={<RegisterForm/>}/>
          <Route path='/login-form' element={<LoginForm/>}/>
          <Route path='/childtoparent' element={<ChildToParent/>}/>
          <Route path='/all-products' element={<AllProducts/>}/>
       </Routes>
       <Footer />
    </div>
  );
}
export default App;
