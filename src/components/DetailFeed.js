import { Link } from 'react-router-dom';
import './css/DetailFeed.css';
import DetailFeedImg from '../img/DetailFeed.png';
import ZaynProfile from '../img/cardicon.png';
import Abdul from '../img/NotifAbdul.png';
import Egi from '../img/NotifEgi.png';
import LoveIcon from '../img/loveicon.png';
import CommentIcon from '../img/commenticon.png';
import MessageAir from '../img/messageair.png';

export default function DetailFeed(props) {
	const { show, handleClose } = props;

	const handleFormCommentFeed = (event) => event.preventDefault();

	const handleCloseFeed = (event) => {
		handleClose(!show);
	}

	return show && (
		<div className="detailfeed">
			<div className="df-overlay" onClick={handleCloseFeed}></div>
			<div className="df-body">
				<section className="df-left">
					<img src={ DetailFeedImg } alt="detailfeed" className="df-right-img" />
				</section>
				<section className="df-right">
					<span className="df-close-feed" onClick={ handleCloseFeed }>x</span>
					<div className="df-feed-myfeed">
						<Link to="/profile-people"><img src={ ZaynProfile } alt="zayn"/></Link>
						<Link to="/profile-people" className="df-feed-name"><span>Zayn</span></Link>
						<p className="df-feed-cap">To Begin Again..</p>
					</div>
					<div className="df-comment-people">
						<section>
							<img src={ Abdul } alt="egi"/>
							<span className="df-feed-name">abdul</span>
							<p className="df-feed-cap">good place</p>
						</section>
						<section>
							<img src={ Egi } alt="egi"/>
							<span className="df-feed-name">egi_lol</span>
							<p className="df-feed-cap">nice vibe</p>
						</section>
					</div>
					<div className="df-lcsi">
						<div className="df-icon-lcs">
							<img src={LoveIcon} alt=""/>
							<img src={CommentIcon} alt=""/>
							<img src={ MessageAir } alt=""/>
							<p>156.290 Like</p>
						</div>
						<form onSubmit={ handleFormCommentFeed }>
							<input type="text" className="df-comment" placeholder="comment"  />	
						</form>
					</div>
				</section>
			</div>
		</div>
	);
}

