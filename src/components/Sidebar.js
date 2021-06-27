import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { Link } from 'react-router-dom';
import { BsList } from 'react-icons/bs';
import './css/Sidebar.css';
import DumbGramIcon from '../img/DumbGramIcon.png';
import Rt3 from '../img/rt3.png';
import PenIcon from '../img/penicon.png';
import HomeIcon from '../img/homeicon.png';
import ExploreIcon from '../img/explorer.png';
import LogoutIcon from '../img/logouticon.png';
import { API, setAuthToken } from '../config/api';
import ZaynImg from '../img/zaynprofile.png';

export default function Sidebar(props) {
	const route = useHistory();
	const { change } = props;
	const [state, dispatch] = useContext(UserContext);
	const [followers, setFollowers] = useState(0);
	const [following, setFollowing] = useState(0);
	const [post, setPost] = useState(0);
	const [user, setUser ] = useState({ ...state.user });
	const path = 'http://localhost:5000/uploads/';
	
	let iconPen = (
		<Link to="/edit-profile"><img src={ PenIcon } className="sb-pen-icon" alt="pen" /></Link>
	);
	if (window.location.pathname.substring(1) === 'edit-profile')
		iconPen = null;
	
	useEffect(() => {
		if(change) {
			setUser(change);
			console.log(change);
		}
	}, [change]);


	const countFollows = async () => {
		try {
			const followers = await API.get(`/followers/${user.id}`);
			const following = await API.get(`/following/${user.id}`);
			const resFeeds = await API.get('/feeds');
			const allFeeds = resFeeds?.data?.data?.feeds;
			const feeds = allFeeds.filter((feed) => feed.user.id === user.id);
			setPost(feeds?.length);
			setFollowers(followers?.data?.data?.followers?.length);
			setFollowing(following?.data?.data?.following?.length);
		} catch (error) {
			console.log(error.message);
		}
	}

	useEffect(() => {
		countFollows();
	}, []);

	const handleLogout = () => {
		dispatch({
			type: 'logout'
		});
		localStorage.removeItem('token');
		route.push('/');
	}

	return(
		<div className="sidebar sb-list-toggle">
			<header className="sb-header">
				<img src={ DumbGramIcon } alt="dumb-ico" />
			</header>
			<div className="sb-name-bio">
				{ iconPen }
				<div className="sb-bg-rainbow">
					<img src={ `${path}${user.image}` } className="sb-img" alt="foto-profile" />
				</div>
				<p className="sb-name">{ user?.fullName || 'Zayn' }</p>
				<p className="sb-username">{ user?.username || '@zayn'}</p>
			</div>
			<div className="sb-pff">
				<ul>
					<li>
						<Link to={ `/profile-people/${state?.user?.id}`}>
							<p>Post</p>
							<p className="sb-count">{ post || 0 }</p>
						</Link>
					</li>
					<li className="sb-center">
						<p>Follower</p>
						<p className="sb-count">{ followers || 0 }</p>
					</li>
					<li>
						<p>Following</p>
						<p className="sb-count">{ following || 0 }</p>
					</li>
				</ul>
			</div>
			<div className="sb-bio">
				<p className="sb-bio-text">{ user?.bio }</p>
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
						<img src={ LogoutIcon } alt="home" />
						<span className="sb-li-text" onClick={ handleLogout }>Logout</span>
					</li>
				</ul>
			</div>
		</div>
	);
}