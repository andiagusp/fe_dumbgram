import { useState, useEffect, useContext, useRef } from 'react';
import { API } from '../config/api';
import { UserContext } from '../context/UserContext';
import MessageComing from '../img/notifmessage1.png';
import MessageSend from '../img/notifmessage1.png';
import './css/MessageContent.css';

export default function MessageContent(props){
	const path = 'http://localhost:5000/uploads/';
	const { uid } = props;
	const messagesEndRef = useRef(null);
	const [state, dispatch] = useContext(UserContext);
	const [input, setInput] = useState({ message: '' });
	const [chatList, setChatList] = useState();
	
	useEffect(() => {
		if (uid) {
			getMessage(uid);
		}
	}, [uid]);

	useEffect(() => {
		scrollToBottom();
	}, [chatList]);

	const handleFormSend = async (event) => {
		try {
			event.preventDefault();
			const body = JSON.stringify({ message: input.message });
			const config = {
				headers: { 'Content-Type': 'application/json' }
			}
			console.log(body)
			const res = await API.post(`/message/${uid}`, body, config);
			getMessage(uid);
			setInput({ message: '' });
		} catch (error) {
			console.log(error.response);
		}
	}

	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
	}

	const getMessage = async (id) => {
		try {
			const res = await API.get(`/message-user/${id}`);
			console.log(res?.data?.data?.message);
			setChatList(res?.data?.data?.message);
		} catch (error) {
			console.log(error?.response);
		}
	}

	const handleInput = (event) => {
		setInput({
			...input,
			[event.target.name]: event.target.value
		});
	}
	
	return uid ? (
		<div className="messagecontent">
			<section className="mc-chatting-body">
				{
					chatList?.map((chat) => {
						return (chat.user.id === state.user.id) ?
						(
							<div className="mc-message-outgoing">
								<div className="mc-wrap-rainbow mc-img-outgoing">
									<img src={ `${path}${chat.user.image}` } alt="outgoing"/>
								</div>
								<span className="mc-text-outgoing">{ chat.message }</span>
							</div>
						)
						:
						(
							<div className="mc-message-incomming">
								<div className="mc-wrap-rainbow">
									<img src={ `${path}${chat.user.image}` } alt="incoming"/>
								</div>
								<span className="mc-text-incomming">{ chat.message }</span>
							</div>
						);
					})
				}
				<div ref={ messagesEndRef } />
			</section>
			<section className="mc-form-send">
				<form onSubmit={ handleFormSend }>
					<input type="text" className="mc-input-send" name="message" autoComplete="off" onChange={ handleInput } value={ input.message } />
				</form>
			</section>
		</div>
	) : (
		<div className="messagecontent">
			<h1 className="mc-no-msg">No Message</h1>
		</div>
	);
}
