import { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom';
import Home from './pages/Home';
import Feed from './pages/Feed';
import Explore from './pages/Explore';
import ProfilePeople from './pages/ProfilePeople';
import CreatePost from './pages/CreatePost';
import EditProfile from './pages/EditProfile';
import Message from './pages/Message';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserContext } from './context/UserContext';
// import CannotAccess from './pages/CannotAccess';
import { API, setAuthToken } from './config/api';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  const history = useHistory();
  const [state, dispatch] = useContext(UserContext);

  useEffect(() => {
    cekUserLogin();
  }, []);

  const cekUserLogin = async () => {
    try {
      const token = localStorage.token;
      const response = await API.get('/cek-login');
      console.log(response?.data);
      dispatch({
        type: 'login',
        payload: { ...response?.data?.data?.user, token }
      })
    } catch (error) {
      console.log(error?.response);
      if (error?.response?.status === 401){
        dispatch({
          type: 'logout',
          payload: {}
        })
      }
      history.push('/');
    }
  }

  return (
    <div className="App">
      <Router>
        <Switch>
        { (state.isLogin) ? 
          <>
            <Route path="/message/:uid" component={ Message } />
            <Route exact path="/message" component={ Message } />
            <Route path="/edit-profile" component={ EditProfile } />
            <Route path="/create-post" component={ CreatePost } />
            <Route path="/profile-people/:uid" component={ ProfilePeople } />
            <Route path="/explore" component={ Explore } />
            <Route path="/feed" component={ Feed } />
          </>
        : 
          <>
            <Route exact path="/*" component={ Home } />
          </>
        }
        </Switch>
      </Router>
    </div>
  );
}

export default App;
