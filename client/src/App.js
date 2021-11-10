import { Switch, Route, Link } from 'react-router-dom';
import Signup from './components/signup/Signup';
import Signin from './components/signin/Signin';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/routing/PrivateRoute';
import Profilnutri from './components/profil.js/Profilnutri';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>WORKSHOP AUTH</h1>
      <Switch>
        <Route exact path="/"><Link to="/login"><button>Signin</button></Link><Link to="/register"><button>Signup</button></Link></Route>
        <Route path="/register" component={Signup} />
        <Route path="/login" component={Signin} />
        {/*<Route path="/" />*/}
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/profil" component={Profilnutri}/>

      </Switch>
    </div>
  );
}

export default App;
