import { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PenIcon from '../img/penicon.png';
import { UserContext } from '../context/UserContext';

import DumbGramIcon from '../img/DumbGramIcon.png';
import HomeIcon from '../img/homeicon.png';
import ExploreIcon from '../img/explorer.png';
import LogoutIcon from '../img/logouticon.png';
import { API } from '../config/api';

export default function SidebarPeople(props) {
	const { uid, setName } = props;
	const route = useHistory();
	const [isFollow, setFollow] = useState(false);
	const [people, setPeople] = useState();
	const [follows, setFollows] = useState({ post: 0, followers: 0, following: 0 });
	const [state, dispatch] = useContext(UserContext);
	const path = 'http://localhost:5000/uploads/';

	const getPeople = async () => {
		try {
			const response = await API.get(`/user/${uid}`);
			console.log(response?.data?.data);
			setPeople(response?.data?.data?.user);
			if (+uid === state?.user?.id) {
				return setName('My Posts, Feed');
			}
			setName(`${response?.data?.data?.user?.fullName}, Feed`);
		} catch (error) {
			console.log(error)
		}
	}

	const getFollows = async () => {
		try {
			const followers = await API.get(`/followers/${uid}`);
			const following = await API.get(`/following/${uid}`);
			const feeds = await API.get(`/feeds`);
			const feed = feeds?.data?.data?.feeds.filter((f) => f.user.id === +uid);
			const isFoll = followers?.data?.data?.followers?.find((f) => f.user.id === state.user.id);

			isFoll ? setFollow(true) : setFollow(false);
			setFollows({
				post: feed.length, 
				followers: followers?.data?.data?.followers?.length,
				following: following?.data?.data?.following?.length
			})
		} catch (error) {
			console.log(error)
		}
	}

	const handleButtonFollow = async () => {
		try {
			const body = JSON.stringify({ id: uid });
			const config = {
				headers: { 'Content-Type': 'application/json' }
			}
			const response = await API.post('/follow', body, config);
			(response?.data?.message === 'success follow')? setFollow(true) : setFollow(false);


		} catch (error) {
			console.log(error.response)
		}
	}

	const countFollowers = async () => {
		try {
			const response = await API.get(`/followers/${uid}`);
			console.log(response?.data?.data?.followers)
			setFollows({
				...follows,
				followers: response?.data?.data?.followers?.length
			})
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		countFollowers();
	}, [isFollow]);

	useEffect(() => {
		getPeople();
		getFollows();
	}, []);

	const handleLogout = () => {
		dispatch({
			type: 'logout'
		});
		localStorage.removeItem('token');
		route.push('/');
	}

	return (
		<div className="sidebar sb-list-toggle">
			<header className="sb-header">
				<img src={ DumbGramIcon } alt="dumb-ico" />
			</header>
			<div className="sb-name-bio">
				{ (+uid === state?.user?.id) && <Link to="/edit-profile"><img src={ PenIcon } className="sb-pen-icon" alt="pen" /></Link>}
				<div className="sb-bg-rainbow">
					<img src={ `${path}${people?.image}` } className="sb-img" alt="foto-profile" />
				</div>
				<p className="sb-name">{ people?.fullName }</p>
				<p className="sb-username">{ people?.username }</p>
			</div>
			{ (+uid !== state?.user?.id) &&
				<div className="sb-fm">
					<button className="sb-btn-message-rainbow">Message</button>
					<button className="sb-btn-follow" onClick={ handleButtonFollow }>{ (isFollow)? 'Unfollow' : 'Follow' }</button>
				</div>
			}
			<div className="sb-pff">
				<ul>
					<li>
						<p>Post</p>
						<p className="sb-count">{ follows?.post || 0 }</p>
					</li>
					<li className="sb-center">
						<p>Follower</p>
						<p className="sb-count">{ follows?.followers || 0 }</p>
					</li>
					<li>
						<p>Following</p>
						<p className="sb-count">{ follows?.following || 0 }</p>
					</li>
				</ul>
			</div>
			<div className="sb-bio">
				<p className="sb-bio-text">{ people?.bio }</p>
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
