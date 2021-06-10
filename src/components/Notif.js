import './css/Notif.css';

import Abdul from '../img/NotifAbdul.png';
import Egi from '../img/NotifEgi.png';

export default function Notif(props){
	const { show, handleClose } = props;
	const handleButtonCloseNotif = () => handleClose(!show);
	
	return show && (
		<div className="notif">
			<div className="n-overlay" onClick={ handleButtonCloseNotif }></div>
			<div className="n-body">
				<section className="n-people-come">
					<img src={ Abdul } className="n-img" alt="" />
					<span className="n-name">egi</span>
					<p className="n-notif"><span>Comment : </span>Nice place</p>
				</section>
				<section className="n-people-come">
					<img src={ Egi } className="n-img" alt="" />
					<span className="n-name">egi</span>
					<p className="n-notif"><span>Comment : </span>Good vibe</p>
				</section>
			</div>
		</div>
	);
}
