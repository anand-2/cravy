import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom'  
import Login from './components/sections/Login'
import Register from "./components/sections/Register"




function App() {
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