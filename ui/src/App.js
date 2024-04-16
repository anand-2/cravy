import '@mantine/core/styles.css';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom'  ;
import Login from './components/sections/Login';
import Register from "./components/sections/Register";
import Home from "./components/sections/Home";
import Dish from "./components/sections/Dish";
import Restaurant from "./components/sections/Restaurant"
import axios from 'axios';
import {  MantineProvider } from '@mantine/core';




function App() {
  axios.defaults.headers.common['Content-Type'] ='application/json;charset=UTF-8'  // for all requests
  return ( 
    <MantineProvider>
      <div className = "App" style={{backgroundColor:'#FFF5EC',height:'auto'}}>
     <Router>  
      <Route exact path='/' component={Home}></Route>
      <Route path='/register' component={Register}></Route>
      <Route path='/login' component={Login}></Route>
      <Route path='/dish' component={Dish}></Route>
      <Route path='/restaurant' component={Restaurant}></Route>

    </Router>
    </div>  
    </MantineProvider>
   
  );
}

export default App;