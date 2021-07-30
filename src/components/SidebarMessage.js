import { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { API } from '../config/api';
import DumbGramIcon from '../img/DumbGramIcon.png';
import NM1 from '../img/notifmessage1.png';
import NM2 from '../img/notifmessage2.png';
import './css/SidebarMessage.css';

export default function SidebarMessage(props) {
	const route = useHistory();
	const path = 'http://localhost:5000/uploads/';
	const { setName, uid, setUid } = props;
	const [firstChat, setFirstChat] = useState({});
	const [isFirst, setFirst] = useState(false);
	const [list, setList] = useState([]);

	useEffect(() => {
		setInterval(() => {
			getList();
		}, 5000);
		setFirst(false);
	}, []);

	useEffect(() => {
		if (list) {
			cekFirst(uid);
		}
	}, [list]);

	const getList = async () => {
		try {
			const res = await API.get('/message-last');
			setList(res?.data?.data?.message);
			console.log(res?.data?.data)
			setName('Message');
		} catch (error) {
			console.log(error?.response);
		}
	}

	const cekFirst = (id) => {
		if (!id) return;
		const result = list.find((l) => l.senderMessageId === +id);
		
		console.log(result)
		if (result) {
			setFirst(false);
		} else {
			getFirstChat();
			setFirst(true);
		}
	}

	const getFirstChat = async () => {
		try {
			const res = await API.get(`/user/${uid}`);
			console.log(res?.data?.data?.user);
			setFirstChat(res?.data?.data?.user);
		} catch (error) {
			console.log(error?.response);
		}
	}

	const changeUid = (id) => {
		setUid(id);
		route.push(`/message/${id}`);
	}

	return (
		<div className="sidebarmessage">
			<header className="sm-header">
				<Link to="/feed"><img src={ DumbGramIcon } alt="dumbgram-ico"/></Link>
			</header>
			<div className="sm-list-message">
				{
					list?.map((list, index) => (
						<section className="sm-message" key={ index } onClick={ () => changeUid(list?.senderMessageId) }>
							<div className="sm-wrap-rainbow">
								<img src={ `${path}${list.sender.image}` } alt="notifmessage1" />
							</div>
							<div className="sm-nm">
								<span className="sm-name">{ list?.sender.username }</span>
								<p className="sm-text-message">{ list?.message }</p>
							</div>
						</section>
					))
				}
				{
					(isFirst) &&
					<section className="sm-message">
						<img src={ `${path}${firstChat?.image}` } alt="notifmessage2"/>
						<span className="sm-name">{ firstChat?.username }</span>
						<p className="sm-text-message">{  }</p>
					</section>
				}
			</div>
		</div>
	);
}