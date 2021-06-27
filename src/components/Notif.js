import { useEffect, useContext, useState } from 'react';
import { API } from '../config/api';
import { UserContext } from '../context/UserContext';
import './css/Notif.css';

import Abdul from '../img/NotifAbdul.png';
import Egi from '../img/NotifEgi.png';

export default function Notif(props){
	const path = 'http://localhost:5000/uploads/';
	const { show, handleClose } = props;
	const [state, dispatch] = useContext(UserContext);
	const [listNotif, setListNotif] = useState();

	const handleButtonCloseNotif = () => handleClose(!show);

	useEffect(() => {
		if (show) {
			getNotif();
		}
	}, [show]);
		
	const getNotif = async () => {
		try {
			const res = await API.get(`/comments-notif`);
			console.log(res?.data.data)
			setListNotif(res?.data.data.notifs)
		} catch (error) {
			console.log(error.response)
		}
	}

	return show && (
		<div className="notif">
			<div className="n-overlay" onClick={ handleButtonCloseNotif }></div>
			<div className="n-body">
			<p className="n-notif-header">Notification</p>
		{
			listNotif?.map((list) => (
				<section className="n-people-come">
					<img src={ `${path}${list?.fileName}` } className="n-img" alt="" />
					<span className="n-name">{ list?.caption }</span>
					<p className="n-time-post">{ list?.createdAt }</p>

						{
							list.comment.map((comment) => (
								<section className="n-people-comment">
									<img src={ `${path}${comment?.user?.image}` } className="n-img" alt="" />
									<span className="n-name">{ comment?.user?.username }</span>
									<p className="n-notif"><span>Comment : </span>{ comment?.comment }</p>
									<p className="n-time-comment">{ comment?.createdAt }</p>
								</section>	
							))
						}
						<hr />
				</section>
			))	
		}
				<section className="n-people-come">
					<img src={ Egi } className="n-img" alt="" />
					<span className="n-name">egi</span>
					<p className="n-notif"><span>Comment : </span>Good vibe</p>
				</section>
			</div>
		</div>
	);
}
