import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom'  ;
import Login from './components/sections/Login';
import Register from "./components/sections/Register";
import Home from "./components/sections/Home";
import Restaurant from "./components/sections/Restaurant"
import axios from 'axios';
import RestHome from './components/sections/RestHome';
import Contact from './components/sections/Contact';




function App() {
  axios.defaults.headers.common['Content-Type'] ='application/json;charset=UTF-8'  // for all requests
  return ( 
      <div className = "App" style={{backgroundColor:'#FFF5EC',height:'auto'}}>
     <Router>  
      <Route exact path='/' component={Home}></Route>
      <Route path='/register' component={Register}></Route>
      <Route path='/login' component={Login}></Route>
      <Route path='/resHome' component={RestHome}></Route>
      <Route path='/restaurant' component={Restaurant}></Route>
      <Route path='/Contact' component={Contact}></Route>


    </Router>
    </div>  
   
  );
}

export default App;