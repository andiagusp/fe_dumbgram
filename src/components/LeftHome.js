import { useState } from 'react';
import { Col } from 'react-bootstrap';
import DumbGram from '../img/DumbGram.png';
import RegisterLogin from './RegisterLogin';

import './css/LeftHome.css';

export default function LeftHome() {
  const [show, setShow] = useState(false);
  const [nameModal, setNameModal] = useState('');

  const handleModalLogin = () => {
    setShow(!show);
    setNameModal('login');
    console.log('oke');
  }

  const handleModalRegister = () => {
    setShow(!show);
    setNameModal('register');
    console.log('oke');
  }

  return (
    <Col lg={5}>
      <RegisterLogin show={ show } nameModal={ nameModal } handleClose={ setShow } handleChangeModal={ setNameModal } />
      <img src={ DumbGram } className="lh-img-icon" alt="DumbGram-Icon"/>
      <p className="lh-text-share">Share your best photos or videos</p>
      <p className="lh-text-join">Join now, share your creations with another people and enjoy other creations.</p>
      <button className="lh-btn lh-btn-rainbow" onClick={ handleModalLogin }>Login</button>
      <button className="lh-btn lh-btn-register" onClick={ handleModalRegister }>Register</button>
    </Col>
  )
}
