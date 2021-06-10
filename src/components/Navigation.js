import { useState } from 'react';
import { BsList, BsBell } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Notif from './Notif';
import MessageIcon from '../img/MessageAirplane.png';
import IconSearch from '../img/iconsearch.png';
import './css/Navigation.css';

export default function Navigation(props) {
	const { titleNav } = props;
	const [showNotif, setShowNotif] = useState(false);	

	const handleShowNotif = () => setShowNotif(!showNotif);

	return(
		<nav className="navigation">
			<Notif show={ showNotif } handleClose={ setShowNotif } />
			<section className="nav-top">
				<div className="nav-top-right">
					<form action="" className="nav-form-search">
						<img src={ IconSearch } className="nav-icon-search" alt="search" />
						<input type="text" className="nav-input" placeholder="search" />
					</form>
				</div>
				<div className="nav-top-left">
					<BsBell className="nav-right-icon" onClick={ handleShowNotif } />
					<img src={ MessageIcon } className="nav-msg-icon" alt="messageair" />
					<Link to="/create-post"><button className="nav-btn-rainbow"><span>+</span>Create Post</button></Link>	
				</div>
			</section>
			<section className="nav-down">
				<h2 className="nav-title">{ titleNav || window.location.pathname.substring(1) }</h2>
			</section>
		</nav>
	);
}