import { Row, Col } from 'react-bootstrap';
import './css/RightHome.css';

import Rt1 from '../img/rt1.png';
import Rt2 from '../img/rt2.png';
import Rt3 from '../img/rt3.png';
import Rt4 from '../img/rt4.png';
import Rt5 from '../img/rt5.png';
import Rt6 from '../img/rt6.png';
import Rt7 from '../img/rt7.png';
import Rt8 from '../img/rt8.png';

export default function MyComponent() {
  return (
    <Col lg={7}>
      <div className="rh-img-row">
        <div className="rh-img-col">
          <img src={ Rt1 } className="rh-img-content" alt="rt1" />
          <img src={ Rt4 } className="rh-img-content" alt="rt1" />
          <img src={ Rt7 } className="rh-img-content" alt="rt1" />

        </div>
        <div className="rh-img-col">
          <img src={ Rt2 } className="rh-img-content" alt="rt1" />
          <img src={ Rt5 } className="rh-img-content" alt="rt1" />
        </div>
        <div className="rh-img-col">
          <img src={ Rt3 } className="rh-img-content" alt="rt1" />
          <img src={ Rt6 } className="rh-img-content" alt="rt1" />
          <img src={ Rt8 } className="rh-img-content" alt="rt1" />
        </div>
        <div className="rh-img-col">
        </div>
        <div className="rh-img-col">
        </div>
        <div className="rh-img-col">
        </div>
        <div className="rh-img-col">
        </div>
        <div className="rh-img-col">
        </div>
      </div>
    </Col>
  )
}
