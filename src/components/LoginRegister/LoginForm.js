import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Alert } from 'react-bootstrap';
import { API, setAuthToken } from '../../config/api';
import { UserContext } from '../../context/UserContext';

export default function LoginForm(props) {
  const [, dispatch] = useContext(UserContext);
  const { handleClose, handleChangeModal } = props;
  const [login, setLogin] = useState({email: '', password: ''});
  const [error, setError] = useState('');
  const route = useHistory();

  const handleChangeModalRegister = (e) => handleChangeModal('register');

  const handleInputLogin = (event) => {
    const value = event.target.value;
    setLogin({
      ...login,
      [event.target.name]: value
    })
  }

  const handleCloseLogin = () => {
    handleClose(false);
    handleChangeModal('');
    setError('');
  }

  const handleFormSubmitLogin = async (event) => {
    try {
      event.preventDefault();
      const config = {
        headers: { 'Content-Type': 'application/json'  }
      }
      const body = JSON.stringify({ ...login });
      const response = await API.post('/login', body, config);
      localStorage.setItem('token', response.data.data.user.token);
      setAuthToken(response.data.data.user.token);
      dispatch({
        type: 'login_success',
        payload: response.data.data.user
      })
      setError('');
      handleClose(false);
      route.push('/feed');
    } catch (error) {
      setError(error?.response?.data?.message);
      console.log(error.response);
    }
  }

  return (
    <>
      <div className="rl-overlay" onClick={ handleCloseLogin }></div>
      <div className="l-body">
        <h1 className="l-title">Login</h1>
        {
          (error) && <Alert variant="danger">
            {error}
          </Alert>
        }
        <form onSubmit={ handleFormSubmitLogin }>
          <div className="l-form-group">
            <input type="text" className="l-form-input" onChange={ handleInputLogin } value={ login.email } name="email" placeholder="Email" />
          </div>
          <div className="l-form-group">
            <input type="password" className="l-form-input" onChange={ handleInputLogin } value={ login.password} name="password" placeholder="Password" />
          </div>
          <div className="l-form-group">
            <button className="l-btn-rainbow">Login</button>
          </div>
        </form>
        <p className="l-text-bottom">Already have an account ? Click <span onClick={ handleChangeModalRegister }>Here</span></p>
      </div>
    </>
  );
}
