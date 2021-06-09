import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Feed from './pages/Feed';
import Explore from './pages/Explore';
import ProfilePeople from './pages/ProfilePeople';
import CreatePost from './pages/CreatePost';
import EditProfile from './pages/EditProfile';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/edit-profile">
            <EditProfile />
          </Route>
          <Route path="/create-post">
            <CreatePost />
          </Route>
          <Route path="/profile-people">
            <ProfilePeople />
          </Route>
          <Route path="/explore">
            <Explore />
          </Route>
          <Route path="/feed">
            <Feed />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
