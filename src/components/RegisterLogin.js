import { useState } from 'react';
import './css/RegisterLogin.css';

export default function RegisterLogin(props) {
  const { show, nameModal, handleClose, handleChangeModal } = props;
  const [register, setRegister] = useState({
    email: '',
    name: '',
    username: '',
    password: ''
  });
  let modal = null;

  const handleChangeModalLogin = (e) => alert('oke');

  const handleFormSubmit = (event) => {
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
          <form onSubmit={ handleFormSubmit }>
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
  return show && modal;
}
