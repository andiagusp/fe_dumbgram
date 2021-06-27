import { useState, useEffect } from 'react';
import { FcLike } from 'react-icons/fc';
import MessageAir from '../../img/messageair.png';
import LoveIcon from '../../img/loveicon.png';
import CardIcon from '../../img/cardicon.png';
import CommentIcon from '../../img/commenticon.png';
import { API } from '../../config/api';

export default function CardFeedPeople(props) {
	const { feeds, show, handleClose, setDetail, likes, setLikes } = props;
  const path = 'http://localhost:5000/uploads/';
  const [isLike, setLike] = useState(false);
  const [love, setLove] = useState();

  useState(() => {
    setLove(feeds.like);
    setTimeout(() => {
      cekLikes();
    }, 5000);

    return () => {
      setLike([]);
    }
  }, []);

  const cekLikes = () => {
    const result = likes.find((like) => like.feedId === feeds.id)
    if (result) {
      setLike(true);
    } else {
      setLike(false);
    }
  }

  const handleDetailFeedPeople = () => {
    handleClose(!show);
    setDetail(feeds);
  }

  const handleLike = async () => {
    try {
      const body = JSON.stringify({ id: feeds?.id });
      const headers = {
        headers: { 'Content-Type': 'application/json' }
      }
      const response = await API.post('/like', body, headers);
      checkLike(feeds?.id);
    } catch (error) {
      console.log(error?.response);
    }
  }

  const checkLike = async (id) => {
    try {
      const response = await API.get(`/like/${id}`);
      console.log(response?.data);
      if (response?.data?.message === 'like not found') {
        setLike(false);
      }
      if (response?.data?.message === 'success like') {
        setLike(true);
      }
      countLike(id);
    } catch (error) {
      setLike(false);
      console.log(error?.response?.status);
    }
  }

  const countLike = async (id) => {
    try {
      const like = await API.get(`/feed-like/${id}`);
      console.log(like?.data.data.feed.like);
      setLove(like?.data?.data?.feed?.like);
    } catch (error) {
      console.log(error)
      console.log(error?.response);
    }
  }

  const handleDetailFeed = () => {
    handleClose(!show);
    setDetail(feeds);
  }

	return (
		<div className="fcp-card" >
			<img src={ `${path}${feeds?.fileName}` } className="fcp-card-img" alt="c1" onClick={ handleDetailFeedPeople } />
			<section className="fcp-card-feedback">
				<div className="fcp-cf-left">
          <img src={ `${path}${feeds?.user?.image}` } alt="card-icon" />
          <p className="fcp-cf-name">{ feeds?.user?.username }</p>
      	</div>
      	<div className="fcp-cf-right">
          {
            (isLike) ? 
            <FcLike onClick={ handleLike } className="cf-love-icon" alt="card-icon" /> :
            <img src={ LoveIcon } onClick={ handleLike } className="cf-love-icon" alt="card-icon" />
          }
          <img src={ CommentIcon } onClick={ handleDetailFeed } alt="card-icon" />
          <img src={ MessageAir } alt="card-icon" />
        </div>
			</section>
			<p>{ love || 0 } Like</p>
		</div>
	);
}
