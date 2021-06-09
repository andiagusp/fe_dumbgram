import { BsList, BsBell } from 'react-icons/bs';
import MessageIcon from '../img/MessageAirplane.png';
import IconSearch from '../img/iconsearch.png';
import './css/Navigation.css';

export default function Navigation() {
	const title = (window.location.pathname.substring(1) === 'profile-people') ? 'Zayn, Feed' : '';

	return(
		<nav className="navigation">
			<section className="nav-top">
				<div className="nav-top-right">
					<form action="" className="nav-form-search">
						<img src={ IconSearch } className="nav-icon-search" alt="search" />
						<input type="text" className="nav-input" placeholder="search" />
					</form>
				</div>
				<div className="nav-top-left">
					<BsBell className="nav-right-icon" />
					<img src={ MessageIcon } className="nav-msg-icon" alt="messageair" />
					<button className="nav-btn-rainbow"><span>+</span>Create Post</button>	
				</div>
			</section>
			<section className="nav-down">
				<h2 className="nav-title">{ title || window.location.pathname.substring(1) }</h2>
			</section>
		</nav>
	);
}