import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom'  
import Login from './components/sections/Login'
import Register from "./components/sections/Register"
import axios from 'axios';



function App() {
  axios.defaults.headers.common['Content-Type'] ='application/json;charset=UTF-8'  // for all requests
  return ( 
    <div className = "App" >
     <Router>  
      <Route exact path='/' component={Login}></Route>
      <Route path='/register' component={Register}></Route>
    </Router>
    </div>  
  );
}

export default App;