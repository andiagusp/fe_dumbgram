import { useState } from 'react';
import { BsList, BsBell } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Notif from './Notif';
import MessageIcon from '../img/MessageAirplane.png';
import IconSearch from '../img/iconsearch.png';
import SearchModal from './SearchModal';
import './css/Navigation.css';
import { API } from '../config/api';

export default function Navigation(props) {
	const { name, setUid } = props;
	const [searchModal, setSearchModal] = useState(false);
	const [showNotif, setShowNotif] = useState(false);	
	const [users, setUsers] = useState([]);
	const [data, setData] = useState();
	const [input, setInput] = useState('');
	const handleShowNotif = () => setShowNotif(!showNotif);

	const handleFormSearch = event => {
		event.preventDefault();
		if (!input) return;
		const filter = users.filter((user) => {
			if (user?.username.includes(input)) {
				return user;
			}
		});
		
		if (filter) {
			setData(filter);
			setSearchModal(true);
		}
	}

	const handleKeypress = (event) => {
		if (event.keyCode === 27) {
			setSearchModal(false);
		}
	}

	const handleSearchInput = event => {
		const value = event.target.value;
		setInput(value);
	}

	const handleFocus = async () => {
		try {
			const users = await API.get('/users');
			console.log(users?.data?.data?.users);
			setUsers(users?.data?.data?.users);
		} catch (error) {
			console.log(error?.response);
		}
	}

	return(
		<nav className="navigation">
			<SearchModal
				show={ searchModal }
				handleClose={ setSearchModal }
				data={ data }
				input={ input }
				setUid={ setUid }
			/>
			<Notif show={ showNotif } handleClose={ setShowNotif } />
			<section className="nav-top">
				<div className="nav-top-right">
					<form onSubmit={ handleFormSearch } className="nav-form-search">
						<img src={ IconSearch } className="nav-icon-search" alt="search" />
						<input type="text" onFocus={ handleFocus } onChange={ handleSearchInput } onKeyUp={ handleKeypress } value={ input } className="nav-input" placeholder="search" />
					</form>
				</div>
				<div className="nav-top-left">
					<BsBell className="nav-right-icon" onClick={ handleShowNotif } />
					<Link to="/message"><img src={ MessageIcon } className="nav-msg-icon" alt="messageair" /></Link>
					<Link to="/create-post"><button className="nav-btn-rainbow"><span>+</span>Create Post</button></Link>	
				</div>
			</section>
			<section className="nav-down">
				<h2 className="nav-title">{ (name === undefined)? window.location.pathname.substring(1) : `${name}` }</h2>
			</section>
		</nav>
	);
}