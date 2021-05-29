import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
     <Switch>
        <Route  path='/'>
            <Home></Home>
        </Route>
     </Switch>
    </Router>
  );
}

export default App;
