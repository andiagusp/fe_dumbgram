import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route to="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
