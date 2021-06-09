import { Row, Col } from 'react-bootstrap';
import './css/ExploreContent.css';
import E1 from '../img/ex1.png';
import E2 from '../img/ex2.png';
import E3 from '../img/ex3.png';
import E4 from '../img/ex4.png';
import E5 from '../img/rt2.png';
import E6 from '../img/rt4.png';

export default function ExploreContent() {
	return (
		<div className="explorecontent">
			<Row>
				<Col lg={4}>
					<img src={ E1 } className="ec-img" alt="explorecontent" />
					<img src={ E4 } className="ec-img" alt="explorecontent" />
				</Col>
				<Col lg={4}>
					<img src={ E2 } className="ec-img" alt="explorecontent" />
					<img src={ E5 } className="ec-img" alt="explorecontent" />
				</Col>
				<Col lg={4}>
					<img src={ E3 } className="ec-img" alt="explorecontent" />
					<img src={ E6 } className="ec-img" alt="explorecontent" />
				</Col>
			</Row>
		</div>
	)
}