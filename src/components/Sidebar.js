import { Link } from 'react-router-dom';
import { BsList } from 'react-icons/bs';
import './css/Sidebar.css';
import DumbGramIcon from '../img/DumbGramIcon.png';
import Rt3 from '../img/rt3.png';
import PenIcon from '../img/penicon.png';
import HomeIcon from '../img/homeicon.png';
import ExploreIcon from '../img/explorer.png';
import LogoutIcon from '../img/logouticon.png';

export default function Sidebar() {
	return(
		<div className="sidebar sb-list-toggle">
			<header className="sb-header">
				<img src={ DumbGramIcon } alt="dumgram-icon" />
			</header>
			<div className="sb-name-bio">
				<img src={ PenIcon } className="sb-pen-icon" alt="pen" />
				<img src={ Rt3 } className="sb-img" alt="foto-profile" />
				<p className="sb-name">Lisa</p>
				<p className="sb-username">@lalalisa_m</p>
			</div>
			<div className="sb-pff">
				<ul>
					<li>
						<p>Post</p>
						<p className="sb-count">200</p>
					</li>
					<li className="sb-center">
						<p>Follower</p>
						<p className="sb-count">5.2M</p>
					</li>
					<li>
						<p>Following</p>
						<p className="sb-count">1</p>
					</li>
				</ul>
			</div>
			<div className="sb-bio">
				<p className="sb-bio-text">Rapper in Black Pink, Brand Ambasador Penshoppe</p>
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