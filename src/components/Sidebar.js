import { Link } from 'react-router-dom';
import { BsList } from 'react-icons/bs';
import './css/Sidebar.css';
import DumbGramIcon from '../img/DumbGramIcon.png';
import Rt3 from '../img/rt3.png';
import PenIcon from '../img/penicon.png';
import HomeIcon from '../img/homeicon.png';
import ExploreIcon from '../img/explorer.png';
import LogoutIcon from '../img/logouticon.png';
import ZaynImg from '../img/zaynprofile.png';

export default function Sidebar() {
	let name = null;
	let username = null;
	let location = null;
	let textBio = null;
	if (window.location.pathname.substring(1) === 'profile-people') {
		name = 'Zayn Malik';
		username = '@zayn';
		location = window.location.pathname.substring(1);
		textBio = 'Nobody is Listening Out Now! www.inzayn.com';
	}
	return(
		<div className="sidebar sb-list-toggle">
			<header className="sb-header">
				<img src={ DumbGramIcon } alt="dumb-ico" />
			</header>
			<div className="sb-name-bio">
				{ (location !== 'profile-people')&&<img src={ PenIcon } className="sb-pen-icon" alt="pen" />}
				{
					(location === 'profile-people')?
					<img src={ ZaynImg } className="sb-img" alt="foto-profile" />:<img src={ Rt3 } className="sb-img" alt="foto-profile" />
				}
				<p className="sb-name">{ name || 'Lisa' }</p>
				<p className="sb-username">{ username || '@lalalisa_m'}</p>
			</div>
			<div className="sb-fm">
				<button className="sb-btn-message-rainbow">Message</button>
				<button className="sb-btn-follow">Unfollow</button>
			</div>
			<div className="sb-pff">
				<ul>
					<li>
						<p>Post</p>
						<p className="sb-count">200</p>
					</li>
					<li className="sb-center">
						<p>Follower</p>
						<p className="sb-count">5.2 M</p>
					</li>
					<li>
						<p>Following</p>
						<p className="sb-count">1</p>
					</li>
				</ul>
			</div>
			<div className="sb-bio">
				<p className="sb-bio-text">{textBio || 'Rapper in Black Pink, Brand Ambasador Penshoppe'}</p>
			</div>
			<div className="sb-nav-link">
				<ul>
					<hr className="sb-line"/>
					<li className="sb-li">
						<Link className="sb-li-link" to="/feed">
							<img src={ HomeIcon } alt="home" />
							<span className="sb-li-text">Feed</span>
						</Link>
					</li>
					<li className="sb-li">
						<Link className="sb-li-link" to="/explore">
							<img src={ ExploreIcon } alt="home" />
							<span className="sb-li-text">Explore</span>
						</Link>
					</li>
					<hr className="sb-line"/>
					<li className="sb-li">
						<Link className="sb-li-link" to="/">
							<img src={ LogoutIcon } alt="home" />
							<span className="sb-li-text">Logout</span>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}