import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './css/RegisterLogin.css';

export default function RegisterLogin(props) {
  const history = useHistory();
  const { show, nameModal, handleClose, handleChangeModal } = props;
  const [login, setLogin] = useState({email: '', password: ''});
  const [register, setRegister] = useState({
    email: '',
    name: '',
    username: '',
    password: ''
  });
  let modal = null;

  const handleChangeModalLogin = (e) => handleChangeModal('login');
  const handleChangeModalRegister = (e) => handleChangeModal('register');

  const handleFormSubmitRegister = (event) => {
    event.preventDefault();
    localStorage.setItem('user', JSON.stringify(register));
    alert('Succes Registration');
    setRegister({
      email: '',
      name: '',
      username: '',
      password: ''
    });
  }
  const handleInputRegister = (event) => {
    const value = event.target.value;
    setRegister({
      ...register,
      [event.target.name]: value
    })
  }

  const handleFormSubmitLogin = (event) => {
    event.preventDefault();
    const user = JSON.parse(localStorage.getItem('user'));
    if (user.email === login.email && user.password === login.password) {
      alert('login success');
      history.push('/feed');
      setLogin({email: '', password: ''});
    }
  }

  const handleInputLogin = (event) => {
    const value = event.target.value;
    setLogin({
      ...login,
      [event.target.name]: value
    })
  }

  const handleCloseRegister = () => {
    handleClose(false);
    handleChangeModal('');
  }

  if (nameModal === 'register') {
   modal = (
    <>
      <div className="rl-overlay"  onClick={ handleCloseRegister }></div>
      <div className="r-body">
        <h1 className="r-title">Register</h1>
        <div className="r-content">
          <form onSubmit={ handleFormSubmitRegister }>
            <div className="r-form-group">
              <input type="text" className="r-form-input" onChange={ handleInputRegister } value={ register.email } name="email" placeholder="Email" />
            </div>
            <div className="r-form-group">
              <input type="text" className="r-form-input" onChange={ handleInputRegister } value={ register.name } name="name" placeholder="Name" />
            </div>
            <div className="r-form-group">
              <input type="text" className="r-form-input" onChange={ handleInputRegister } value={ register.username } name="username" placeholder="Username" />
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
    );
  }

  if (nameModal === 'login') {
    modal = (
      <>
      <div className="rl-overlay" onClick={ handleCloseRegister }></div>
        <div className="l-body">
          <h1 className="l-title">Login</h1>
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
  return show && modal;
}
