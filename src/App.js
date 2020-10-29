import './App.css';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Error from './pages/Error';

function App() {
  return (
    <Router> 
      <Switch>
      <Route exact path="/"   component={Dashboard} />
      <Route  exact  path="/login" component={Login} />
      <Route path="*"  component={Error}/>
      </Switch>
    </Router>
  );
}

export default App;
