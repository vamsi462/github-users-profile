import './App.css';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Error from './pages/Error';
import PrivateRoute from './pages/PrivateRoute';
import AuthWrapper from './pages/AuthWrapper';

function App() {
  
  return (
    <AuthWrapper>
    <Router>
      <Switch>
      <PrivateRoute path='/' exact={true}>
            <Dashboard/>
      </PrivateRoute>
      <Route  exact  path="/login" component={Login} />
      <Route path="*"  component={Error}/>
      </Switch>
    </Router>
    </AuthWrapper>
  );
}

export default App;
