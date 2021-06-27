import { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import C2 from '../img/rt7.png';
import MessageAir from '../img/messageair.png';
import LoveIcon from '../img/loveicon.png';
import CardIcon from '../img/cardicon.png';
import CommentIcon from '../img/commenticon.png';
import { FcLike } from 'react-icons/fc';
import { API } from '../config/api';
import DetailFeed from './DetailFeed';
import CardFeedPeople from './FeedContentPeople/CardFeedPeople';

export default function FeedContentPeople(props){
	const path = 'http://localhost:5000/uploads/';
	const { uid } = props;
	const isLike = false;
	const [show, setShow] = useState(false);
	const [feeds, setFeeds] = useState();
	const [send, setSend] = useState();
	const [likes, setLikes] = useState(); 


	const getFeedFollow = async (uid) => {
		try {
			const response = await API.get(`/feeds/${uid}`);
			const responseLike = await API.get('/likes');
			setLikes(responseLike?.data?.data?.like);
			console.log(response?.data?.data?.feeds);
			setFeeds(response?.data?.data?.feeds);
		} catch (error) {
			console.log(error?.response);
		}
	}

	useState(() => {
		getFeedFollow(uid);
	}, [uid]);
	
	const handleLike = () => console.log('oke')
	const handleDetailFeed = () => console.log('oke')

	return (
		<main className="feedcontentpeople">
			<div className="fcp-feed">
				{
					feeds?.map((feed, index) => (
						<CardFeedPeople
							feeds={ feed }
							show={ show }
							handleClose={ setShow }
							likes={ likes }
							setLikes= { setLikes }
							setDetail={ setSend }
							key={ index }
						/>
					))
				}
				<DetailFeed
					show={ show }
					handleClose={ setShow }
					data={ send }
					setData={ setSend }
					likes={ likes }
				/>
			</div>
		</main>
	);
}
