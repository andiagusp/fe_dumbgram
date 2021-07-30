import { useState, useEffect, useContext } from 'react';
import { Row, Col } from 'react-bootstrap';
import DetailFeed from './DetailFeed';
import CardFeed from './FeedContent/CardFeed';
import './css/FeedContent.css';
import { API } from '../config/api';
import { UserContext } from '../context/UserContext';

export default function FeedContent() {
	const [state, dispatch] = useContext(UserContext);
	const [detail, setDetail] = useState();
	const [detailFeed, setDetailFeed] = useState(false);
	const [feeds, setFeeds] = useState([]);
	const [likes, setLikes] = useState();
	const { id } = state.user;

	const handleDetailFeed = () => setDetailFeed(!detailFeed);

	const feedByFollow = async () => {
		try {
			const responseFeed = await API.get('/feed');
			const responseLike = await API.get('/likes');
			setLikes(responseLike?.data?.data?.like);
			console.log(responseLike.data.data)
			setFeeds(responseFeed?.data?.data?.feeds);
		} catch (error) {
			console.log(error?.response);
		}
	}

	useEffect(() => {
		feedByFollow();
	}, [])

	return (feeds.length === 0) ? (
		<main className="feedcontent">
			<h2 style={{ textAlign: 'center', marginTop: '25vh' }}>No Feeds Follow Someone For Look Feed</h2>
		</main>
	) : (
		<main className="feedcontent">
			<div className="fc-feed">
				{ 
					feeds.map((feed, index) => {
						return (
							<CardFeed
								feeds={ feed }
								show={ detailFeed }
								handleClose={ setDetailFeed }
								setDetail={ setDetail }
								likes={ likes }
								setLikes={ setLikes }
								key={ index }
								currentid={ id }
							/>
						);
					})
				}
				<DetailFeed
					show={ detailFeed }
					handleClose={ setDetailFeed }
					data={ detail }
					setData={ setDetail }
					likes={ likes }
					currentid={ id }
				/>
			</div>
		</main>
	);
}
