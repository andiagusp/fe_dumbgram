import { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import C2 from '../../img/rt7.png';
import MessageAir from '../../img/messageair.png';
import LoveIcon from '../../img/loveicon.png';
import CardIcon from '../../img/cardicon.png';
import CommentIcon from '../../img/commenticon.png';
import { FcLike } from 'react-icons/fc';
import { API } from '../../config/api';

export default function CardFeed(props){
  const { feeds, show, handleClose, setDetail, likes, setLikes } = props;
  const router = useHistory();
  const [love, setLove] = useState(feeds.like);
  const [isLike, setLike] = useState(false);
  const path = 'http://localhost:5000/uploads/';

  useEffect(() => {
    setTimeout(() => {
      cekLike(); 
    }, 2500);
    
    return () => {
      setLikes([]);
    }
  }, []);

  const cekLike = () => {
    const result = likes.find((like) => like.feedId === feeds.id)
    if (result) {
      setLike(true);
    } else {
      setLike(false);
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

  const redirectMessage = () => router.push(`/message/${feeds.user.id}`);
	return (
    <div className="fc-card">
      <img src={ `${path}${feeds?.fileName}` || C2 } className="pointer fc-card-img" alt="c1" onClick={ handleDetailFeed } />
      <section className="fc-card-feedback">
        <div className="fc-cf-left">
          <img src={ `${path}${feeds?.user?.image}` } alt="card-icon" />
          <p className="fc-cf-name">{ feeds?.user?.username }</p>
        </div>
        <div className="fc-cf-right">
          {
            (isLike) ? 
            <FcLike onClick={ handleLike } className="cf-love-icon" alt="card-icon" /> :
            <img src={ LoveIcon } onClick={ handleLike } className="cf-love-icon" alt="card-icon" />
          }
          <img src={ CommentIcon } onClick={ handleDetailFeed } alt="card-icon" />
          <img src={ MessageAir } alt="card-icon" onClick={ redirectMessage } />
        </div>
      </section>
      <p>{ love || 0 } Like</p>
    </div>
  );
}