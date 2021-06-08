import { Col } from 'react-bootstrap';
import DumbGram from '../img/DumbGram.png'

import './css/LeftHome.css';

export default function MyComponent() {
  return (
    <Col lg={5}>
      <img src={ DumbGram } className="lh-img-icon" alt="DumbGram-Icon"/>
      <p className="lh-text-share">Share your best photos or videos</p>
      <p className="lh-text-join">Join now, share your creations with another people and enjoy other creations.</p>
      <button className="lh-btn lh-btn-rainbow">Login</button>
      <button className="lh-btn lh-btn-register">Register</button>
    </Col>
  )
}
