import { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { API, setAuthToken } from '../../config/api';

export default function RegisterForm(props) {
  const { handleClose, handleChangeModal } = props;
  const [error, setError] = useState('');
  const [register, setRegister] = useState({
    email: '',
    fullName: '',
    username: '',
    password: ''
  });

  const handleChangeModalLogin = (e) => handleChangeModal('login');

  const handleFormSubmitRegister = async (event) => {
    try {
      event.preventDefault();
      const config = {
        headers: { 'Content-Type': 'application/json' }
      }
      const body = JSON.stringify(register);
      const response = await API.post('/register', body, config)
      setAuthToken(response.data.data.user.token);
      alert('Succes Registration');
      setError('');
      setRegister({
        email: '',
        fullName: '',
        username: '',
        password: ''
      });
    } catch (error) {
      setError(error.response.data.message);
      console.log(error?.response);
    }
  }

  const handleInputRegister = (event) => {
    const value = event.target.value;
    setRegister({
      ...register,
      [event.target.name]: value
    })
  }

  const handleCloseRegister = () => {
    handleClose(false);
    handleChangeModal('');
    setError('');
  }

  return (
    <>
      <div className="rl-overlay"  onClick={ handleCloseRegister }></div>
      <div className="r-body">
        <h1 className="r-title">Register</h1>
          {
            (error) && <Alert variant="danger">
              {error}
            </Alert>
          }
        <div className="r-content">
          <form onSubmit={ handleFormSubmitRegister }>
            <div className="r-form-group">
              <input type="text" className="r-form-input" onChange={ handleInputRegister } value={ register.email } name="email" placeholder="Email" />
            </div>
            <div className="r-form-group">
              <input type="text" className="r-form-input" onChange={ handleInputRegister } value={ register.fullName } name="fullName" placeholder="fullName" />
            </div>
            <div className="r-form-group">
              <input type="text" className="r-form-input" onChange={ handleInputRegister } value={ register.username } name="username" placeholder="username" />
            </div>
            <div className="r-form-group">
              <input type="password" className="r-form-input" onChange={ handleInputRegister } value={ register.password } name="password" placeholder="Password" />
            </div>
            <div className="r-form-group">
              <button className="r-btn-rainbow">Register</button>
            </div>
          </form>
          <p className="r-text-bottom">Already have an account ? Click <span onClick={ handleChangeModalLogin }>Here</span></p>
        </div>
      </div>
    </>
  )
}
