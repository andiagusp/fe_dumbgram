import { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import DetailFeed from './DetailFeed';
import './css/FeedContent.css';
import CardIcon from '../img/cardicon.png';
import C1 from '../img/rt1.png';
import C2 from '../img/rt7.png';
import C3 from '../img/rt6.png';
import C4 from '../img/rt9.png';
import C5 from '../img/rt2.png';
import C6 from '../img/rt4.png';
import MessageAir from '../img/messageair.png';
import LoveIcon from '../img/loveicon.png';
import CommentIcon from '../img/commenticon.png';

export default function FeedContent() {
	const [detailFeed, setDetailFeed] = useState(false);

	const handleDetailFeed = () => setDetailFeed(!detailFeed);

	return(
		<main className="feedcontent">
			<DetailFeed show={ detailFeed } handleClose={ setDetailFeed } />
			<Row>
				<Col lg={4}>
					<div className="fc-card">
						<section>
							<img src={ C1 } className="fc-card-img" alt="c1" />
						</section>
						<section className="fc-card-feedback">
							<div className="fc-cf-left">
								<img src={ CardIcon } alt="card-icon" />
							</div>
							<div className="fc-cf-right">
								<img src={ LoveIcon } alt="card-icon" />
								<img src={ CommentIcon } alt="card-icon" />
								<img src={ MessageAir } alt="card-icon" />
							</div>
						</section>
						<p>126.100 Like</p>
					</div>
					<div className="fc-card">
						<section>
							<img src={ C4 } className="fc-card-img" alt="c1" />
						</section>
						<section className="fc-card-feedback">
							<div className="fc-cf-left">
								<img src={ CardIcon } alt="card-icon" />
							</div>
							<div className="fc-cf-right">
								<img src={ LoveIcon } alt="card-icon" />
								<img src={ CommentIcon } alt="card-icon" />
								<img src={ MessageAir } alt="card-icon" />
							</div>
						</section>
						<p>126.100 Like</p>
					</div>
				</Col>
				<Col lg={4}>
					<div className="fc-card">
						<section className="fc-card-img-wrapper" onClick={ handleDetailFeed }>
							<img src={ C2 } className="fc-card-img" alt="c1" />
						</section>
						<section className="fc-card-feedback">
							<div className="fc-cf-left">
								<img src={ CardIcon } alt="card-icon" />
							</div>
							<div className="fc-cf-right">
								<img src={ LoveIcon } alt="card-icon" />
								<img src={ CommentIcon } alt="card-icon" />
								<img src={ MessageAir } alt="card-icon" />
							</div>
						</section>
						<p>126.100 Like</p>
					</div>
					<div className="fc-card">
						<section>
							<img src={ C5 } className="fc-card-img" alt="c1" />
						</section>
						<section className="fc-card-feedback">
							<div className="fc-cf-left">
								<img src={ CardIcon } alt="card-icon" />
							</div>
							<div className="fc-cf-right">
								<img src={ LoveIcon } alt="card-icon" />
								<img src={ CommentIcon } alt="card-icon" />
								<img src={ MessageAir } alt="card-icon" />
							</div>
						</section>
						<p>126.100 Like</p>
					</div>
				</Col>
				<Col lg={4}>
					<div className="fc-card">
						<section>
							<img src={ C3 } className="fc-card-img" alt="c1" />
						</section>
						<section className="fc-card-feedback">
							<div className="fc-cf-left">
								<img src={ CardIcon } alt="card-icon" />
							</div>
							<div className="fc-cf-right">
								<img src={ LoveIcon } alt="card-icon" />
								<img src={ CommentIcon } alt="card-icon" />
								<img src={ MessageAir } alt="card-icon" />
							</div>
						</section>
						<p>126.100 Like</p>
					</div>
					<div className="fc-card">
						<section>
							<img src={ C6 } className="fc-card-img" alt="c1" />
						</section>
						<section className="fc-card-feedback">
							<div className="fc-cf-left">
								<img src={ CardIcon } alt="card-icon" />
							</div>
							<div className="fc-cf-right">
								<img src={ LoveIcon } alt="card-icon" />
								<img src={ CommentIcon } alt="card-icon" />
								<img src={ MessageAir } alt="card-icon" />
							</div>
						</section>
						<p>126.100 Like</p>
					</div>
				</Col>
			</Row>
		</main>
	);
}