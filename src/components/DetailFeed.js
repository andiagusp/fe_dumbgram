import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './css/DetailFeed.css';
import LoveIcon from '../img/loveicon.png';
import CommentIcon from '../img/commenticon.png';
import MessageAir from '../img/messageair.png';
import { FcLike } from 'react-icons/fc';
import { API } from '../config/api';
import { MdDelete } from 'react-icons/md';

export default function DetailFeed(props) {
	const path = 'http://localhost:5000/uploads/';
	const { show, handleClose, data, likes, setData, currentid } = props;
	const commentRef = useRef(null);
	const [like, setLike] = useState(0);
	const [isLove, setLove] = useState(false);
	const [comments, setComments] = useState();
	const [commentFeed, setCommentFeed] = useState({ feedId: '', comment: '' });
	
	const cekLikes = () => {
		console.log(data)
		console.log(likes)
		const filter = likes.find((like) => like.feedId === data.id);
		if (filter) {
      setLove(true);
    } else {
      setLove(false);
    }
	}

	const handleComment = (event) => {
		const value = event.target.value;
		setCommentFeed({
			...commentFeed,
			[event.target.name]: value
		});
	}
	
	const handleFormCommentFeed = (event) => {
		event.preventDefault();
		addComment(commentFeed);
	}

	const addComment = async (commen) => {
		try {
			const body = JSON.stringify(commen);
			const headers = {
				headers: { 'Content-Type': 'application/json' }
			}
			const response = await API.post('/comment', body, headers);
			setCommentFeed({ feedId: data?.id, comment: '' })
			getComments();
			console.log(response?.data);
		} catch (error) {
			console.log(error?.response);
		}
	}

	const getComments = async () => {
		try {
			const response = await API.get(`/comments/${data?.id}`);
			setComments(response?.data?.comments);
		} catch (error) {
			console.log(error?.response);
		}
	}

	const handleLoveClick = async () => {
		try {
      const body = JSON.stringify({ id: data?.id });
      const headers = {
        headers: { 'Content-Type': 'application/json' }
      }
      const response = await API.post('/like', body, headers);
      checkLike(data?.id);
    } catch (error) {
      console.log(error?.response);
    }
	}

	const checkLike = async (id) => {
    try {
      const response = await API.get(`/like/${id}`);
      console.log(response?.data);
      if (response?.data?.message === 'like not found') {
        setLove(false);
      }
      if (response?.data?.message === 'success like') {
        setLove(true);
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
      setLike(like?.data?.data?.feed?.like);
    } catch (error) {
      console.log(error)
      console.log(error?.response);
    }
  }

  const deleteComment = async (uid) => {
  	try {
      const result = await API.delete(`/comment/${uid}`);
      console.log(result?.data.data);
      getComments();
    } catch (error) {
      console.log(error)
      console.log(error?.response);
    }
  }

  const goToBottom = () => {
  	commentRef.current?.scrollIntoView({ behavior: 'smooth' });
  }

	useEffect(() => {
		if (data) {
			getComments();
			setCommentFeed({ feedId: data?.id, comment: '' })
			cekLikes();
			setLike(data?.like);
		}
	}, [data]);

	useEffect(() => {
		goToBottom();
	}, [comments]);

	const handleCloseFeed = (event) => {
		handleClose(!show);
		setData();
	}

	return show && (
		<div className="detailfeed">
			<div className="df-overlay" onClick={handleCloseFeed}></div>
			<div className="df-body">
				<section className="df-left">
					<img src={ `${path}${data?.fileName}` } alt="detailfeed" className="df-right-img" />
				</section>
				<section className="df-right">
					<span className="df-close-feed" onClick={ handleCloseFeed }>x</span>
					<div className="df-feed-myfeed">
						<Link to={ `/profile-people/${data?.user?.id}` }><img src={ `${path}${data?.user?.image}` } alt="zayn"/></Link>
						<Link to={ `/profile-people/${data?.user?.id}` } className="df-feed-name"><span>{ data?.user?.username }</span></Link>
						<p className="df-feed-cap">{ data?.caption }</p>
					</div>
					<div className="df-comment-people">
						{(comments?.length === 0) && <p>No comment yet</p>} 
						{
							comments?.map((comment) => (
								<section key={ comment?.id }>
									<img src={ `${path}${comment?.user?.image}` }  alt="comment-pict" />
									<span className="df-feed-name">{ comment?.user?.username }</span>
									<p className="df-feed-cap">{ comment?.comment }</p>
									<p className="df-feed-date">{ comment?.createdAt }</p>
									{ (comment?.user?.id === currentid) && <MdDelete className="df-icon-trash" onClick={ () => deleteComment(comment?.id) } /> }
								</section>
							))
						}
						<div ref={ commentRef } />
					</div>
					<div className="df-lcsi">
						<div className="df-icon-lcs">
							{ (isLove)? <FcLike onClick={ handleLoveClick } className="df-love-icon" /> :
							<img src={LoveIcon} className="df-love-icon" alt="" onClick={ handleLoveClick } />}
							<img src={CommentIcon} alt=""/>
							<img src={ MessageAir } alt=""/>
							<p>{ like } Like</p>
						</div>
						<form onSubmit={ handleFormCommentFeed }>
							<input type="text" className="df-comment" onChange={ handleComment } name="comment" value={ commentFeed.comment } placeholder="comment" autoComplete="off" />	
						</form>
					</div>
				</section>
			</div>
		</div>
	);
}
